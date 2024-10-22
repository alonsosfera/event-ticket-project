import { Form, Modal, Input, message } from "antd"
import { useState } from "react"
import axios from "axios"

const NewPasswordComponent = ({ recoveryId, onClose, visible }) => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onPasswordRecovery = async () => {
    setLoading(true)
    try {
      const { password, confirmation } = form.getFieldsValue()
      if (password !== confirmation) {
        message.error("Las contraseñas no coinciden")
        return
      }

      await axios.post("/api/auth/password-change", { recovery: recoveryId, password })
      message.success("Contraseña restablecida")
      onClose()
    } catch (error) {
      console.error(error)

      if (error.response?.data?.expired) {
        message.error(error.response?.data?.message)
        onClose()
      } else {
        message.error("Ocurrió un error al restablecer la contraseña")
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      open={visible}
      onCancel={onClose}
      okText="Restablecer"
      cancelText="Cancelar"
      onOk={onPasswordRecovery}
      okButtonProps={{ loading }}
      title="Restablecer contraseña">
      <Form form={form}>
        <Form.Item label="Nueva contraseña" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item label="Confirmar contraseña" name="confirmation">
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewPasswordComponent
