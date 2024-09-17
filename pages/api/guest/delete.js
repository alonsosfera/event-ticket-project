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
  if (req.method !== "DELETE") {
    return handleError(res, 405, "Método no permitido")
  }

  const { id } = req.query

  if (!id) {
    return handleError(res, 400, "ID requerido")
  }

  try {
    const deletedGuest = await prisma.guest.delete({
      where: { id }
    })

    return res.status(200).json({
      success: true,
      message: "Invitado eliminado",
      deletedGuest
    })
  } catch (error) {
    if (error.code === "P2025") {
      return handleError(res, 404, "Invitado no encontrado")
    }
    return handleError(res, 500, "Error al eliminar invitado", error)
  }
}

export default withAuthApi(handler)
