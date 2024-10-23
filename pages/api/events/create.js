import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { name, guestQuantity, eventHallId, userId, eventDate } = req.body

  if (!name || !guestQuantity || !eventHallId || !userId || !eventDate) {
    return res.status(400).json({ message: "Todos los campos son requeridos: nombre, cantidad de invitados, salón, usuario y fecha" })
  }

  try {
    const newEvent = await prisma.event.create({
      data: {
        name,
        guestQuantity,
        eventDate,
        eventHall: {
          connect: { id: eventHallId }
        },
        users: {
          connect: { id: userId }
        }
      },
      include: { eventHall: { select: { name: true } }, users: true }
    })

    res.status(201).json(newEvent)
  } catch (error) {
    res.status(500).json({ message: "Error al crear el evento", error })
  }
}

export default withAuthApi(handler)
