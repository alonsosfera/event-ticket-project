import { useDispatch , useSelector } from "react-redux"
import axios from "axios"
import { Button , message , Space , Table } from "antd"
import { deleteEvent } from "@/slices/events-slice"
import dayjs from "dayjs"
import { DeleteOutlined , EditOutlined } from "@ant-design/icons"

const OwnerEventsTable = () => {
  const { list } = useSelector(state => state.eventsSlice)
  const dispatch = useDispatch()

  const handleEdit = () => {

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
            onClick={() => handleDelete(record.key)} />
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
