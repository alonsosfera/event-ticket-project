import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { id } = req.query
  const { name, guestQuantity, eventDate, eventHallId, userId } = req.body

  if (!id) {
    return res.status(400).json({ message: "ID requerido" })
  }

  const dataToUpdate = {}

  if (name) dataToUpdate.name = name
  if (guestQuantity) dataToUpdate.guestQuantity = guestQuantity
  if (eventDate) dataToUpdate.eventDate = new Date(eventDate)
  if (eventHallId) {
    dataToUpdate.eventHall = { connect: { id: eventHallId } }
  }
  if (userId) {
    dataToUpdate.users = { set: [{ id: userId }] }
  }

  if (Object.keys(dataToUpdate).length === 0) {
    return res.status(400).json({ message: "Se requiere al menos un campo para actualizar" })
  }

  try {
    const updatedEvent = await prisma.event.update({
      where: { id },
      data: dataToUpdate
    })

    return res.status(200).json(updatedEvent)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Evento no encontrado" })
    }
    return res.status(500).json({ message: "Error al actualizar evento", error })
  }
}

export default withAuthApi(handler)
