// pages/api/events/[id].js
import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { id } = req.query

  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: { eventHall: true, guests: true }
    })

    if (!event) {
      return res.status(404).json({ message: "Evento no encontrado" })
    }

    return res.status(200).json(event)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener evento", error })
  }
}

export default withAuthApi(handler)
