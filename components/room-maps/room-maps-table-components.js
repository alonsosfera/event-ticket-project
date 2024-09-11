import { Button , Popconfirm , Space , Table } from "antd"
import { DeleteOutlined , EditOutlined } from "@ant-design/icons"
import { useState } from "react"


const RoomMapsTable = () => {

  const [tables, setTables] = useState([
    { key: "1", name: "Mesa 1", capacity: 4 },
    { key: "2", name: "Mesa 2", capacity: 6 },
    { key: "3", name: "Mesa 3", capacity: 2 }
  ])

  const handleEdit = key => {
    ("Edit table with key:", key)
  }

  const handleDelete = key => {
    ("Delete table with key:", key)
    setTables(tables.filter(table => table.key !== key))
  }

  const columns = [
    { title: "Nombre", dataIndex: "name", key: "name" },
    { title: "Mesas", dataIndex: "capacity", key: "capacity" },
    {
      title: "Acciones",
      key: "actions",
      render: (_, record) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)} />
          <Popconfirm
            title="¿Estás seguro de eliminar esta mesa?"
            onConfirm={() => handleDelete(record.key)}
            okText="Sí"
            cancelText="No">
            <Button
              shape="circle"
              icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      )
    }
  ]
  return(
    <Table
      dataSource={tables}
      columns={columns}
      pagination={false} />
  )
}

export default RoomMapsTable