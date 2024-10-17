import dayjs from "dayjs"
import axios from "axios"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Button, message, Space, Table, Modal } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

import { deleteEvent } from "@/slices/events-slice"
import EventModal from "@/components/owner/owner-create-event-modal-component"
import LoadingComponent from "@/components/shared/loading-component"

const OwnerEventsTable = ({ searchText }) => {
  const { isLoading, list } = useSelector(state => state.eventsSlice)
  const [editEvents, setEditEvents] = useState(null)
  const [visible, setVisible] = useState(false)

  const handleEdit = record => {
    setEditEvents(record)
    setVisible(true)
  }

  const dispatch = useDispatch()

  const showConfirm = id => {
    Modal.confirm({
      title: "¿Estás seguro de que quieres eliminar este evento?",
      onOk: () => handleDelete(id),
      okText: "Eliminar",
      cancelText: "Cancelar"
    })
  }

  const handleDelete = async id => {
    try {
      const response = await axios.delete("/api/events/delete", {
        params: { id }
      })

      if (response.status === 200) {
        message.open({
          content: "Salón eliminado con éxito",
          duration: 3
        })
        dispatch(deleteEvent(id))
      } else {
        message.error("Hubo un error al borrar el salón")
      }
    } catch (error) {
      console.error("Error:", error)
      message.error("Hubo un error al borrar el salón")
    }
  }

  const filteredList = list.filter(item =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  )

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
            onClick={() => showConfirm(record.key)} />
        </Space>
      )
    }
  ]

  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <Table
          className="owner-table"
          columns={columns}
          dataSource={filteredList.map(item => ({
            key: item.id,
            name: item.name,
            eventDate: item.eventDate,
            guestQuantity: item.guestQuantity,
            eventHall: item.eventHall,
            users: item.users
          }))}
          pagination={{ pageSize: 10 }}
          scroll={{ x: "1000px" }} />
      )}

      <EventModal
        visible={visible}
        onCancel={() => setVisible(false)}
        eventToEdit={editEvents} />
    </>
  )
}

export default OwnerEventsTable