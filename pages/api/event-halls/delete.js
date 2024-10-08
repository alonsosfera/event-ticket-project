import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { id } = req.query

  if (!id) {
    return res.status(400).json({ message: "El Id es requerido" })
  }

  try {
    // Verificar si hay eventos asociados al salón
    const eventCount = await prisma.event.count({
      where: { eventHallId: id }
    })

    if (eventCount > 0) {
      return res.status(500).json({ message: "El salón ya tiene eventos asignados" })
    }

    // Si no hay eventos, proceder a borrar el salón
    const deletedEventHall = await prisma.eventHall.delete({
      where: {
        id: id
      }
    })

    res.status(200).json(deletedEventHall)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Salón no encontrado" })
    }
    res.status(500).json({ message: "Error al borrar salón", error })
  }
}

export default withAuthApi(handler)
