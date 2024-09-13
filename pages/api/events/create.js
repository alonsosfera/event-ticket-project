import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { name, guestQuantity, eventHallId, userId } = req.body // Agregar userId al destructuring
  const updatedAt = new Date() // Establece updatedAt a la fecha actual

  // Validar que todos los campos requeridos estén presentes
  if (!name || !guestQuantity || !eventHallId || !userId) {
    return res.status(400).json({ message: "Todos los campos son requeridos: name, guestQuantity, eventHallId, userId" })
  }

  try {
    const newEvent = await prisma.event.create({
      data: {
        name,
        guestQuantity,
        updatedAt,
        eventHall: {
          connect: { id: eventHallId } // Conectar con el EventHall existente
        },
        users: {
          connect: { id: userId } // Conectar con el usuario existente
        }
      }
    })

    res.status(201).json(newEvent)
  } catch (error) {
    res.status(500).json({ message: "Error al crear el evento", error })
  }
}

export default withAuthApi(handler)
