import { Form, Input, Select } from "antd"

const NewUser = ({ onSubmit, form }) => {
  const { Option } = Select

  return (
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
      onFinish={onSubmit}>
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
        label="Rol"
        name="role"
        rules={[{ message: "Por favor selecciona un rol!" }]}>
        <Select placeholder="Selecciona un rol">
          <Option value="ADMIN">ADMIN</Option>
          <Option value="HOST">HOST</Option>
        </Select>
      </Form.Item>
    </Form>
  )
}

export default NewUser