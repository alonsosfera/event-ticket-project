import { Modal, message, Form } from "antd"
import NewUser from "@/components/user/new-user-component"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { createUser } from "@/slices/users-slice"

const NewUserModal = ({ isModalVisible, handleCancel }) => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const handleSubmit = async values => {
    setLoading(true)
    try {
      await dispatch(createUser({
        name: values.name,
        phone: values.phone,
        role: values.role,
        tenantId: "5469ab98-e1d6-4575-8951-0e9cd81e7e0c"
      }))

      message.success("Usuario creado exitosamente")
      handleCancel()
    } catch (error) {
      console.error("Error al crear el usuario:", error)
      message.error("No se pudo crear el usuario")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Modal
      title="Nuevo Usuario"
      open={isModalVisible}
      onCancel={handleCancel}
      cancelText="Cancelar"
      okText="Guardar"
      confirmLoading={loading}
      onOk={() => {
        form.submit()
      }}
      width={381}>
      <NewUser onSubmit={handleSubmit} form={form} />
    </Modal>
  )
}

export default NewUserModal