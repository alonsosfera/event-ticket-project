import { Space, Button, Checkbox, Table } from "antd"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons"

const RoomsTableComponent = ({ rooms, handleDelete }) => {

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />
    },
    {
      title: "Salón",
      dataIndex: "name",
      key: "room"
    },
    {
      title: "Capacidad",
      dataIndex: "capacity",
      key: "capacity",
      render: text => text || "No disponible"
    },
    {
      title: "Dirección",
      dataIndex: "locationUrl",
      key: "address"
    },
    {
      title: "Imágenes",
      dataIndex: "image",
      key: "image",
      render: text => text || "No disponible"
    },
    {
      title: "Acciones",
      key: "action",
      render: record => (
        <Space size="middle">
          <Button shape="circle" icon={<EditOutlined />} />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)} />
        </Space>
      )
    }
  ]

  return(
    <Table
      dataSource={rooms} columns={columns}
      rowKey="id" />
  )
}

export default RoomsTableComponent