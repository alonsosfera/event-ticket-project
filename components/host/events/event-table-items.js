import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { Button, Space, message } from "antd"
import axios from "axios"

export const columns = [
  {
    title: "Familia",
    dataIndex: "name"
  },
  {
    title: "Invitados",
    dataIndex: "quantity"
  },
  {
    title: "WhatsApp",
    dataIndex: "phone"
  },
  {
    title: "Estatus",
    dataIndex: "estatus"
  },
  {
    title: "Acciones",
    render: (_, record) => (
      <Space>
        <Button
          icon={<EditOutlined />}
          shape="circle"
          onClick={() => handleEdit(record)} />
        <Button
          icon={<DeleteOutlined />}
          shape="circle"
          onClick={() => handleDelete(record.id)} />
      </Space>
    )
  }
]

const handleEdit = record => {
  record
}

const handleDelete = async guestId => {
  try {
    const response = await axios.delete(`/api/guest/delete?id=${guestId}`)

    if (response.data.success) {
      message.open({
        content: "Invitado eliminado con éxito",
        duration: 3
      })
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || "Error al eliminar el invitado"
    message.error(errorMessage)
  }
}
