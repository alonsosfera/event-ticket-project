import { useState, useEffect, useCallback } from "react"
import { message, Modal } from "antd"
import { useSession } from "next-auth/react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { deleteGuest, fetchGuestsList, setGuestsList, updateGuest } from "@/slices/guests-slice"
import { setEventsList } from "@/slices/events-slice"
import EventTableView from "./event-table-view"
import { columns } from "./event-table-items"

const { confirm } = Modal

const EventTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isInvitateGuestModalVisible, setIsInvitateGuestModalVisible] = useState(false)
  const [selectedGuest, setSelectedGuest] = useState(null)
  const { data: session } = useSession()
  const userId = session?.user?.id
  const dispatch = useDispatch()
  const userEvents = useSelector(state => state.eventsSlice.list)
  const selectedEvent = useSelector(state => state.eventsSlice.selectedEvent)
  const isLoadingGuests = useSelector(state => state.guestsSlice.isLoading)
  const guests = useSelector(state => state.guestsSlice.list) || []

  const fetchEvents = useCallback(async () => {
    if (userId) {
      try {
        const response = await axios.get("/api/events/list", {
          params: { userId }
        })
        dispatch(setEventsList(response.data))
      } catch (error) {
        console.error("Error al traer los eventos:", error)
        message.error("Error al obtener los eventos")
      }
    }
  }, [userId, dispatch])

  const fetchGuests = useCallback(async () => {
    if (selectedEvent) {
      dispatch(fetchGuestsList())
      try {
        const response = await axios.get("/api/guest/list", {
          params: { eventId: selectedEvent.id }
        })
        dispatch(setGuestsList(response.data))
      } catch (error) {
        console.error("Error al obtener los invitados:", error)
        message.error("Error al obtener los invitados")
      }
    }
  }, [selectedEvent, dispatch])

  useEffect(() => {
    const fetchData = async () => {
      await fetchEvents()
      await fetchGuests()
    }

    fetchData()
  }, [fetchEvents, fetchGuests])

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  const handleCancelModal = () => {
    setIsInvitateGuestModalVisible(false)
  }

  const handleEdit = record => {
    setSelectedGuest(record)
    setIsInvitateGuestModalVisible(true)
  }

  const handleSubmitEdit = async values => {
    try {
      const response = await axios.put(`/api/guest/update?id=${selectedGuest.id}`, {
        name: values.familyName,
        guestQuantity: values.numberGuests,
        phone: values.phone
      })

      if (response.data.success) {
        const updatedGuest = response.data.guest
        dispatch(updateGuest(updatedGuest))
        message.open({
          content: "Invitado actualizado correctamente",
          duration: 3
        })
      } else {
        message.error(response.data.message || "Error al actualizar el invitado")
      }
    } catch (error) {
      message.error("Error al procesar la solicitud")
      console.error(error)
    } finally {
      setIsInvitateGuestModalVisible(false)
      setSelectedGuest(null)
    }
  }

  const showDeleteConfirm = id => {
    confirm({
      title: "¿Estás seguro que deseas eliminar este invitado?",
      content: "Esta acción no se puede deshacer y eliminará permanentemente al invitado.",
      okText: "Sí, eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        handleDelete(id)
      }
    })
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
      } else {
        message.error(response.data.message || "Error inesperado al eliminar el invitado")
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al eliminar el invitado"
      message.error(errorMessage)
    }
  }

  const initialValues = selectedGuest ? {
    familyName: selectedGuest.name,
    numberGuests: selectedGuest.quantity,
    phone: selectedGuest.phone
  } : {}

  return (
    <EventTableView
      userEvents={userEvents}
      selectedEvent={selectedEvent}
      selectedRowKeys={selectedRowKeys}
      setSelectedRowKeys={setSelectedRowKeys}
      guests={guests}
      isLoadingGuests={isLoadingGuests}
      selectedGuest={selectedGuest}
      isInvitateGuestModalVisible={isInvitateGuestModalVisible}
      handleEdit={handleEdit}
      handleCancelModal={handleCancelModal}
      handleSubmitEdit={handleSubmitEdit}
      initialValues={initialValues}
      columns={columns}
      showDeleteConfirm={showDeleteConfirm}
      onSelectChange={onSelectChange} />
  )
}

export default EventTable
