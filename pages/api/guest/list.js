import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { eventId } = req.query

  try {

    const guests = await prisma.guest.findMany({
      where: { eventId }
    })

    return res.status(200).json(guests)

  } catch (error) {
    res.status(500).json({ message: "Error al obtener invitados", error })
  }
}

export default withAuthApi(handler)
