import dayjs from "dayjs"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"

export default async function handler(req, res) {
  if (req.method === "POST"){
    try {
      const { phone, password } = req.body
      let user = await prisma.user.findUnique({ where: { phone } })

      bcrypt.compare(password, user.password, async (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err)
          res.status(500).end()
        } else if (result) {
          if (!user.phoneVerified) {
            user = await prisma.user.update({
              where: { id: user.id },
              data: { phoneVerified: dayjs() }
            })
          }
          const { name, phone, type } = user
          res.json({ user: { name, phone, type } })
        } else {
          res.status(401).end()
        }
      })
    } catch (e) {
      res.status(500).json({ error: "Error al iniciar sesión", message: e })
    }
  } else {
    res.status(405).json({ error: "Método no permitido" })
  }
}
