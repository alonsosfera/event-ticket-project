import React, { useState } from "react"
import { Table, Button, Space } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

const OwnerEventsTable = () => {
  const [dataSource, setDataSource] = useState(initialDataSource)

  const handleEdit = record => {
    record
  }

  const handleDelete = key => {
    const newDataSource = dataSource.filter(item => item.key !== key)
    setDataSource(newDataSource)
  }

  const columns = [
    {
      title: "Evento",
      dataIndex: "evento"
    },
    {
      title: "Fecha",
      dataIndex: "fecha"
    },
    {
      title: "Tipo de evento",
      dataIndex: "tipoEvento"
    },
    {
      title: "Invitados",
      dataIndex: "invitados"
    },
    {
      title: "Acomodo de mesas",
      dataIndex: "acomodo"
    },
    {
      title: "Anfitrión",
      dataIndex: "anfitrion"
    },
    {
      title: "Salón",
      dataIndex: "salon"
    },
    {
      title: "Pase",
      dataIndex: "pase"
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

  return (
    <Table
      className="owner-table"
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 10 }} />
  )
}

const initialDataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  evento: `Evento ${i}`,
  fecha: `2024-09-0${i % 10 + 1}`,
  tipoEvento: `Tipo ${i}`,
  invitados: `${i * 10}`,
  acomodo: `Acomodo ${i}`,
  anfitrion: `Anfitrión ${i}`,
  salon: `Salón ${i}`,
  pase: `Pase ${i}`
}))

export default OwnerEventsTable
