// pages/api/events/list.js
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
    let response

    if (session.user.role === "HOST") {
      // Si el rol es HOST, obtener todos los eventos del usuario
      response = await prisma.event.findMany({
        where: { users: { some: { id: session.user.id } } },
        include: { eventHall: true }
      })
    } else if (session.user.role === "ADMIN") {
      // Si el rol es ADMIN, obtener todos los eventos de los eventHall
      const allEventHalls = await prisma.eventHall.findMany({
        where: { tenantId: { in: session.user.tenants.map(tenant => tenant.id) } },
        select: {
          name: true,
          events: {
            include: {
              users: {
                select: { name: true }
              }
            }
          }
        }
      })

      // Filtrar solo los EventHalls que tienen eventos
      response = allEventHalls.flatMap(eventHall =>
        eventHall.events.map(event => ({
          ...event,
          eventHall: eventHall.name
        }))
      )
    } else {
      return res.status(403).json({ message: "Acceso denegado." })
    }

    return res.status(200).json(response)

  } catch (error) {
    res.status(500).json({ message: "Error al obtener datos", error })
  }
}

export default withAuthApi(handler)
