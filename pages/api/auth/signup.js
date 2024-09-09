import axios from "axios"
import bcrypt from "bcrypt"
import { prisma } from "@/lib/prisma"

export default async function handler(req, res) {
  if (req.method === "POST"){
    try {
      const { name, phone, type, tenantId } = req.body

      const randomPassword = Math.random().toString(36).slice(-10)
      const hash = bcrypt.hashSync(randomPassword, SALT_ROUNDS)

      const existingUser = await prisma.user.findFirst({
        where: { phone }
      })

      if (existingUser) {
        await prisma.user.update({
          where: { id: existingUser.id },
          data: { name, tenants: { connect: { id: tenantId } } }
        })
      } else {
        await prisma.user.create({
          data: {
            name,
            type,
            phone,
            password: hash,
            tenants: { connect: { id: tenantId } }
          }
        })
      }

      await axios.post(`${process.env.NEXT_PUBLIC_APP_URI}/api/whatsapp/send-message`, {
        phone,
        bodyVariables: [name],
        templateName: "account_creation",
        buttonVariable: `?phone=${phone}&pass=${randomPassword}`
      })

      res.json({ message: "Usuario creado exitosamente" })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Error al crear usuario", message: e })
    }
  } else {
    res.status(405).json({ error: "Método no permitido" })
  }
}

const SALT_ROUNDS = 10
