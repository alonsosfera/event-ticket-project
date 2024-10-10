import { Modal, message, Form, Input, Select } from "antd"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"

const { Option } = Select

const NewUserModal = ({ isModalVisible, handleCancel, editUser }) => {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const [form] = Form.useForm()
  const tenantId = session?.user?.tenants[0]?.id

  useEffect(() => {
    if (editUser) {
      form.setFieldsValue({
        name: editUser.name,
        phone: editUser.phone,
        role: editUser.role
      })
    } else {
      form.resetFields()
    }
  }, [editUser, form])

  const handleSubmit = async values => {
    setLoading(true)
    try {
      const response = await axios.post("/api/auth/signup", {
        name: values.name,
        phone: values.phone,
        role: values.role,
        tenantId: tenantId
      })
      message.success(response.data.message)
      handleCancel()
      form.resetFields()
    } catch (error) {
      console.error("Error al crear el usuario:", error)
      message.error("No se pudo crear el usuario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      title={editUser ? "Editar Usuario" : "Nuevo Usuario"}  // Título dinámico
      open={isModalVisible}
      onCancel={handleCancel}
      cancelText="Cancelar"
      okText="Guardar"
      confirmLoading={loading}
      onOk={() => {
        form.submit()
      }}
      width={381}>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        requiredMark={false}
        onFinish={handleSubmit}>
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
    </Modal>
  )
}

export default NewUserModal
