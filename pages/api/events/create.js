import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { name, guestQuantity, eventHallId, userId, eventDate } = req.body
  const updatedAt = new Date()

  if (!name || !guestQuantity || !eventHallId || !userId || !eventDate) {
    return res.status(400).json({ message: "Todos los campos son requeridos: name, guestQuantity, eventHallId, userId" })
  }

  try {
    const newEvent = await prisma.event.create({
      data: {
        name,
        guestQuantity,
        updatedAt,
        eventDate,
        eventHall: {
          connect: { id: eventHallId }
        },
        users: {
          connect: { id: userId }
        }
      }
    })

    res.status(201).json(newEvent)
  } catch (error) {
    res.status(500).json({ message: "Error al crear el evento", error })
  }
}

export default withAuthApi(handler)
