import React from "react"
import { Table, Button, Space } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useSelector } from "react-redux"
import dayjs from "dayjs"

const OwnerEventsTable = () => {
  const { list } = useSelector(state => state.eventsSlice)

  const handleEdit = () => {
  }

  const handleDelete = () => {
  }

  const columns = [
    {
      title: "Evento",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Anfitrión",
      dataIndex: "users",
      key: "users",
      render: users => users && users.length > 0 ? users[0].name : "Sin anfitrión"
    },
    {
      title: "Fecha del Evento",
      dataIndex: "eventDate",
      key: "eventDate",
      render: text => dayjs(text).format("YYYY-MM-DD HH:mm")
    },
    {
      title: "Invitados",
      dataIndex: "guestQuantity",
      key: "guestQuantity"
    },
    {
      title: "Salón",
      dataIndex: "eventHall",
      key: "eventHall"
    },
    {
      title: "Acciones",
      key: "actions",
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

  return (
    <Table
      className="owner-table"
      columns={columns}
      dataSource={list.map(item => ({
        key: item.id,
        name: item.name,
        eventDate: item.eventDate,
        guestQuantity: item.guestQuantity,
        eventHall: item.eventHall,
        users: item.users
      }))}
      pagination={{ pageSize: 10 }}
      scroll={{ x: "1000px" }} />
  )
}

export default OwnerEventsTable
