import { prisma } from "@/lib/prisma"
import { withAuthApi } from "@/helpers/with-api-auth"

async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Método no permitido." })
  }

  const { tenantId, name } = req.body

  // Verificar que tenantId y name estén presentes
  if (!tenantId || !name) {
    return res.status(400).json({ message: "Faltan el tenantId o el nombre del EventHall." })
  }

  try {
    // Verificar que el tenant exista
    const tenant = await prisma.tentant.findUnique({
      where: { id: tenantId }
    })

    if (!tenant) {
      return res.status(404).json({ message: "El tenant no existe." })
    }

    // Crear un nuevo EventHall
    const eventHall = await prisma.eventHall.create({
      data: {
        name,
        tenantId
      }
    })

    res.status(201).json({ eventHall })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error, message: "Error al crear el EventHall." })
  }
}

export default withAuthApi(handler)
