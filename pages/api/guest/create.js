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
  if (req.method !== "POST") {
    return handleError(res, 405, "Método no permitido")
  }

  const { name, guestQuantity, phone, eventId } = req.body

  if (!name || !guestQuantity || !phone || !eventId) {
    return handleError(res, 400, "Todos los campos son requeridos: nombre, cantidad de invitados, whatsapp y evento")
  }

  try {
    const newGuest = await prisma.guest.create({
      data: {
        name,
        guestQuantity,
        phone,
        event: {
          connect: { id: eventId }
        }
      }
    })

    res.status(201).json({
      success: true,
      guest: newGuest
    })
  } catch (error) {
    handleError(res, 500, "Error al crear el invitado", error)
  }
}

export default withAuthApi(handler)
