import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  const { id } = req.query

  try {
    if (id) {
      const guest = await prisma.guest.findUnique({
        where: { id },
        include: { event: true }
      })

      if (!guest) {
        return res.status(404).json({ message: "invitado no encontrado" })
      }

      return res.status(200).json(guest)
    } else {
      const guests = await prisma.guest.findMany({
        include: { event: true }
      })

      return res.status(200).json(guests)
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener invitados", error })
  }
}

export default withAuthApi(handler)
