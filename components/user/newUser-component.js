import { Button, Form, Input, Modal } from "antd"
import { useState } from "react"

const NewUser = () => {
  const [visible, setVisible] = useState(true)

  const handleCancel = () => setVisible(false)

  const handleSubmit = () => {
    setVisible(false)
  }

  return (
    <Modal
      title={"Nuevo usuario"}
      visible={visible}
      centered
      onCancel={handleCancel}
      footer={[
        <Button key="cancel" onClick={handleCancel}>
          Cancelar
        </Button>,
        <Button
          key="submit" type="primary"
          onClick={handleSubmit}>
          Guardar
        </Button>
      ]}
      width={381}>
      <Form
        style={{ padding: "1rem" }}
        layout="vertical"
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          label="Nombre"
          name="name"
          rules={[{ message: "Por favor introduce tu nombre!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[{ message: "Por favor confirma tu email!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Teléfono"
          name="telephone"
          rules={[{ message: "Por favor confirma tu número de teléfono!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Rol"
          name="role"
          rules={[{ message: "Por favor confirma tu número de teléfono!" }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewUser
