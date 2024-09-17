import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

function handleError(res, statusCode, message, error = null) {
  console.error(message, error)
  res.status(statusCode).json({
    success: false,
    message,
    ...(error && { error: error.message })
  })
}

async function handler(req, res) {
  if (req.method !== "PUT") {
    return handleError(res, 405, "Método no permitido")
  }

  const { id } = req.query
  const { name, guestQuantity, phone } = req.body

  if (!id) {
    return handleError(res, 400, "ID del invitado requerido")
  }

  if (!name && guestQuantity === undefined && !phone) {
    return handleError(res, 400, "Al menos uno de los campos a actualizar es requerido")
  }

  if (guestQuantity !== undefined) {
    const quantity = parseInt(guestQuantity, 10)
    if (isNaN(quantity) || quantity <= 0) {
      return handleError(res, 400, "guestQuantity debe ser un número entero positivo")
    }
  }

  try {
    const updatedGuest = await prisma.guest.update({
      where: { id },
      data: {
        name,
        guestQuantity: guestQuantity !== undefined ? parseInt(guestQuantity, 10) : undefined,
        phone
      }
    })

    res.status(200).json({
      success: true,
      guest: updatedGuest
    })
  } catch (error) {
    if (error.code === "P2025") {
      return handleError(res, 404, "Invitado no encontrado")
    }
    handleError(res, 500, "Error al actualizar el invitado", error)
  }
}

export default withAuthApi(handler)
