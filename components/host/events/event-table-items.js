import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { Button, Space } from "antd"

export const columns = [
  {
    title: "Familia",
    dataIndex: "familia"
  },
  {
    title: "Invitados",
    dataIndex: "invitados"
  },
  {
    title: "WhatsApp",
    dataIndex: "whatsapp"
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
          onClick={() => handleDelete(record.key)} />
      </Space>
    )
  }
]

export const initialDataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  familia: `Edwa King ${i}`,
  invitados: 32,
  whatsapp: `6394650090 ${i}`,
  estatus: "pendiente"
}))

const handleEdit = record => {
  record
}

const handleDelete = record => {
   record
}
