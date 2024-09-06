import axios from "axios"

export default async function handler(req, res) {
  try {
    const accessToken = `?access_token=${process.env.WHATSAPP_ACCESS_TOKEN}`

    const { phone, templateName, bodyVariables, buttonVariable } = req.body

    const components = []

    if (bodyVariables) {
      components.push({
        type: "body",
        parameters: bodyVariables.map(variable => ({ type: "text", text: variable }))
      })
    }

    if (buttonVariable) {
      components.push({
        index: "0",
        type: "button",
        sub_type: "url",
        parameters: [{ type: "text", text: buttonVariable }]
      })
    }

    await axios.post(`${process.env.WHATSAPP_URL}/messages${accessToken}`, {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: `+52${phone}`,
      type: "template",
      template: {
        name: templateName,
        language: {
          code: "es_MX"
        },
        components
      }
    })

    res.json({ message: "Mensaje enviado." })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error, message: "Error al enviar mensaje." })
  }
}
