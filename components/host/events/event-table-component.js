import { useState, useEffect } from "react"
import { Table, Space, Button, message } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import TableActions from "./event-table-actions-component"
import { columns } from "./event-table-items"
import EmptyDescription from "../../shared/empty-component"
import EventCard from "@/components/events/event-card-component"
import { useSession } from "next-auth/react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setUserEventsList, deleteGuest } from "@/slices/guests-slice"

const EventTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { data: session } = useSession()
  const userId = session?.user?.id
  const dispatch = useDispatch()
  const userEvents = useSelector(state => state.guestsSlice.list)
  const selectedEvent = useSelector(state => state.guestsSlice.selectedEvent)

  useEffect(() => {
    const fetchEvents = async () => {
      if (userId) {
        try {
          const response = await axios.get(`/api/users/${userId}`)
          dispatch(setUserEventsList(response.data))
        } catch (error) {
          console.error("Error al traer los eventos:", error)
        }
      }
    }

    fetchEvents()
  }, [userId, dispatch])

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const getSelectedGuests = () => {
    if (!selectedEvent) return []
    const event = userEvents.find(event => event.id === selectedEvent.id)
    return event?.guests || []
  }

  const selectedGuests = getSelectedGuests()

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
        dispatch(deleteGuest(response.data.deletedGuest.id))
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al eliminar el invitado"
      message.error(errorMessage)
    }
  }

  if (!userEvents || userEvents.length === 0) {
    return (
      <EmptyDescription description="No hay eventos, favor de comunicarse con administración." />
    )
  }

  const mapGuests = guests => {
    return guests.map(guest => ({
      id: guest.id,
      name: guest.name,
      quantity: guest.guestQuantity,
      phone: guest.phone,
      estatus: "pendiente"
    }))
  }

  const columnsWithActions = columns.map(column => {
    if (column.title === "Acciones") {
      return {
        ...column,
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
    }
    return column
  })

  return (
    <div className="event-container">
      {selectedEvent ? (
        <>
          <TableActions
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys} />
          <Table
            size="small"
            bordered
            rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
            columns={columnsWithActions}
            dataSource={mapGuests(selectedGuests)} />
          <EventCard
            events={userEvents}
            clickable={true} />
        </>
      ) : (
        <div>
          <EmptyDescription description="Seleccione un evento para ver aquí sus detalles" />
          <EventCard
            events={userEvents}
            clickable={true} />
        </div>
      )}
    </div>
  )
}

export default EventTable
