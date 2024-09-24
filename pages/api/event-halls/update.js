import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  const { id } = req.query

  if (req.method !== "PUT") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  if (!id) {
    return res.status(400).json({ message: "El Id es requerido" })
  }

  const { name, locationUrl } = req.body

  if (!name && !locationUrl) {
    return res.status(400).json({ message: "Se requiere al menos un campo para actualizar" })
  }

  try {
    const updatedEventHall = await prisma.eventHall.update({
      where: { id: id },
      data: {
        ...(name && { name }),
        ...(locationUrl && { locationUrl })
      }
    })

    res.status(200).json(updatedEventHall)
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Salón no encontrado" })
    }
    res.status(500).json({ message: "Error al actualizar salón", error })
  }
}

export default withAuthApi(handler)
