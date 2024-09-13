import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { id } = req.query

  if (!id) {
    return res.status(400).json({ message: "ID requerido" })
  }

  try {
    const deletedEvent = await prisma.event.delete({
      where: { id }
    })

    return res.status(200).json({ message: "Evento eliminado", deletedEvent })
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Evento no encontrado" })
    }
    return res.status(500).json({ message: "Error al eliminar evento", error })
  }
}

export default withAuthApi(handler)
