import { Form, Input, Select } from "antd"

const NewUser = ({ form, onSubmit }) => {
  const { Option } = Select

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      requiredMark={false}
      onFinish={onSubmit}>
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ required: true, message: "Por favor introduce nombre!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Número de teléfono"
        name="phone"
        rules={[{ required: true, message: "Por favor confirma el número de teléfono!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Rol"
        name="role"
        rules={[{ required: true, message: "Por favor selecciona un rol!" }]}>
        <Select placeholder="Selecciona un rol">
          <Option value="ADMIN">ADMIN</Option>
          <Option value="HOST">HOST</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}

export default NewUser
