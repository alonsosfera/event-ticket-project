import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  const { id } = req.query

  if (req.method === "GET") {
    if (id) {
      return getEventHallById(res, id)
    } else {
      return getAllEventHalls(res)
    }
  }

  return res.status(405).json({ message: "Método no permitido" })
}

async function getAllEventHalls(res) {
  try {
    const eventHalls = await prisma.eventHall.findMany()
    res.status(200).json(eventHalls)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los salones", error })
  }
}

async function getEventHallById(res, id) {
  try {
    const eventHall = await prisma.eventHall.findUnique({
      where: { id: id }
    })

    if (!eventHall) {
      return res.status(404).json({ message: "Salón no encontrado" })
    }

    res.status(200).json(eventHall)
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el salón", error })
  }
}

export default withAuthApi(handler)
