export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body

      const existingUser = await prisma.user.findUnique({
        where: { id }
      })

      if (!existingUser) {
        return res.status(404).json({ error: "Usuario no encontrado" })
      }

      await prisma.user.delete({
        where: { id }
      })

      res.json({ message: "Usuario borrado exitosamente" })
    } catch (e) {
      console.error(e)
      res.status(500).json({ error: "Error al borrar usuario", message: e })
    }
  } else {
    res.status(405).json({ error: "Método no permitido" })
  }
}
