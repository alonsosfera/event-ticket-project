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
      open={setVisible}
      centered
      onCancel={handleCancel}
      cancelText="Cancelar"
      onOk={handleSubmit}
      okText="Guardar"
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
          rules={[{ message: "Por favor confirma whatsapp!" }]}>
          <Input placeholder="WhatsApp" />
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
