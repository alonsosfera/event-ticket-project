import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  try {
    if (!req.query.tenantId) {
      return res.status(400).json({ message: "Falta el id del tenant." })
    }

    const users = await prisma.user.findMany({
      where: { tenants: { some: { id: req.query.tenantId } } },
      select: { id: true, name: true, role: true, phone: true }
    })
    res.json({ users })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error, message: "Error al consultar usuarios." })
  }
}

export default withAuthApi(handler)
