import { Button, Form, Input, Select } from "antd"

const NewUser = ({ onCancel, onSubmit }) => {
  const { Option } = Select

  return (
    <Form
      layout="vertical"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onSubmit}>
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ message: "Por favor introduce nombre!" }]}>
        <Input />
      </Form.Item>
    <Modal
      className="modal-new-user"
      title={"Nuevo usuario"}
      open={visible}
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
        label="Número de teléfono"
        name="phone"
        rules={[{ message: "Por favor confirma el número de teléfono!" }]}>
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
        rules={[{ message: "Por favor selecciona un rol!" }]}>
        <Select placeholder="Selecciona un rol">
          <Option value="ADMIN">ADMIN</Option>
          <Option value="HOST">HOST</Option>
        </Select>
      </Form.Item>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button key="cancel" onClick={onCancel}>
          Cancelar
        </Button>
        <Button
          key="submit"
          style={{ backgroundColor: "#2F333C", color: "#fff", borderRadius: "0px" }}
          type="primary"
          htmlType="submit">
          Guardar
        </Button>
      </div>
    </Form>
  )
}

export default NewUser
