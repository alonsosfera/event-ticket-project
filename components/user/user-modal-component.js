import { Modal, message, Form, Input, Select } from "antd"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"
import { createUser , updateUser } from "@/slices/users-slice"
import { useDispatch } from "react-redux"

const { Option } = Select

const NewUserModal = ({ isModalVisible, handleCancel, editUser }) => {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const [form] = Form.useForm()
  const tenantId = session?.user?.tenants[0]?.id
  const dispatch = useDispatch()

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
      const userData = {
        name: values.name || editUser?.name,
        phone: values.phone || editUser?.phone,
        role: values.role || editUser?.role,
        tenantId: tenantId || editUser?.tenantId
      }

      let response
      if (editUser) {
        response = await axios.put(`/api/users/${editUser.id}`, userData)
      } else {
        response = await axios.post("/api/auth/signup", userData)
      }

      if (editUser) {
        dispatch(updateUser(response.data))
        message.success("El usuario ha sido editado correctamente")
      } else {
        dispatch(createUser(response.data))
        message.success("El usuario ha sido guardado correctamente")
      }

      handleCancel()
      form.resetFields()
    } catch (error) {
      console.error("Error al guardar el usuario:", error)
      message.error("No se pudo guardar el usuario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      title={editUser ? "Editar Usuario" : "Nuevo Usuario"}
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
          rules={[{ required: true, message: "Por favor introduce el nombre!" }]}>
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
