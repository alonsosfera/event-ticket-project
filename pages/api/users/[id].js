import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  const { id } = req.query

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Metodo no permitido" })
  }

  if (!id) {
    return res.status(400).json({ message: "El id del usuario es requerido." })
  }

  try {
    const userWithEvents = await prisma.user.findUnique({
      where: { id },
      include: {
        events: {
          include: {
            guests: true,
            eventHall: {
              select: {
                id: true,
                name: true,
                locationUrl: true
              }
            }
          }
        }
      }
    })

    if (!userWithEvents) {
      return res.status(404).json({ message: "Usuario no encontrado" })
    }

    return res.status(200).json(userWithEvents.events)
  } catch (error) {
    console.error("Error al obtener los eventos del usuario:", error)
    return res.status(500).json({ error: "Error al obtener los eventos del usuario" })
  }
}

export default withAuthApi(handler)
