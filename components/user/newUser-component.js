
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
      className="modal-new-user"
      title={"Nuevo usuario"}
      visible={visible}
      centered
      onCancel={handleCancel}
      footer={
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button key="cancel" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button
            key="submit"
            style={{ backgroundColor: "#17202a", color: "white"  }}
            onClick={handleSubmit}>
            Guardar
          </Button>
        </div>
      }
      width={381}>
      <Form
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