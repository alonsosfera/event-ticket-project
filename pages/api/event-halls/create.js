import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

async function handler(req, res) {

  const session = await getServerSession(req, res, authOptions)

  const tenantId = session.user.tenants?.[0]?.id

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido." })
  }

  const { name, locationUrl, capacity } = req.body

  if (!name) {
    return res.status(400).json({ message: "Falta el nombre del EventHall." })
  }

  try {
    const eventHall = await prisma.eventHall.create({
      data: {
        name,
        tenantId,
        capacity,
        ...(locationUrl && { locationUrl })
      }
    })

    res.status(201).json({ eventHall })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error, message: "Error al crear el EventHall." })
  }
}

export default withAuthApi(handler)