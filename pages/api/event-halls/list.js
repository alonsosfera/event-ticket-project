import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]"

async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions)

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Método no permitido" })
  }

  try {
    const response = await prisma.eventHall.findMany({
      where: { tenantId: { in: session.user.tenants.map(tenant => tenant.id) } }
    })

    return res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos", error })
  }
}

export default withAuthApi(handler)
