import { Button, Form, Input, Modal, Select } from "antd"
import { useState } from "react"

const NewUser = () => {
  const [visible, setVisible] = useState(true)

  const handleCancel = () => setVisible(false)

  const handleSubmit = () => {
    setVisible(false)
  }

  const { Option } = Select

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
          rules={[{ message: "Por favor introduce nombre!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Número de telefono"
          name="phone"
          rules={[{ message: "Por favor confirma email!" }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Rol"
          name="role"
          rules={[{ message: "Por favor selecciona un rol" }]}>
          <Select placeholder="Selecciona un rol">
            <Option value="ADMIN">ADMIN</Option>
            <Option value="HOST">HOST</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewUser
