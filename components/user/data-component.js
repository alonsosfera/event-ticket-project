import { Button , Space } from "antd"
import { DeleteOutlined , EditOutlined } from "@ant-design/icons"

 export const dataSource = list?.map(({ id, ...user }) => ({
  key: user.id,
  role: user.role,
  name: user.name,
  phone: user.phone
}))

 export const columns = [
  {
    title: "Nombre",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Teléfono",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "Rol",
    dataIndex: "role",
    key: "role"
  },
  {
    title: "Acciones",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button shape="circle" icon={<EditOutlined />} />
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Space>
    )
  }
]