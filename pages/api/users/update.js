import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  const { id } = req.query

  if (req.method === "PUT") {
    try {
      const { name, role, phone } = req.body
      const updatedUser = await prisma.user.update({
        where: { id },
        data: {
          name,
          role,
          phone
        }
      })
      res.status(200).json(updatedUser)
    } catch (error) {
      res.status(500).json({ error: "Error al actualizar usuario" })
    }
  } else {
    res.setHeader("Allow", ["PUT"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

export default withAuthApi(handler)