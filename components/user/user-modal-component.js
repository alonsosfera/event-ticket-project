import { Modal, message, Form } from "antd"
import NewUser from "@/components/user/new-user-component"
import { useState } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"

const NewUserModal = ({ isModalVisible, handleCancel }) => {
  const [loading, setLoading] = useState(false)
  const { data: session } = useSession()
  const [form] = Form.useForm()
  const tenantId = session?.user?.tenants[0]?.id

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
      <NewUser form={form} onSubmit={handleSubmit} />
    </Modal>
  )
}

export default NewUserModal
