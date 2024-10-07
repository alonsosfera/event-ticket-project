import { useState, useEffect } from "react"
import { Table } from "antd"
import { useEvent } from "../../events/event-context"
import TableActions from "./event-table-actions-component"
import { columns, initialDataSource } from "./event-table-items"
import EmptyDescription from "../../shared/empty-component"
import EventCard from "@/components/events/event-card-component"
import { useSession } from "next-auth/react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { setUserEventsList } from "@/slices/events-slice"

const EventTable = () => {
  const [dataSource, setDataSource] = useState(initialDataSource)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { selectedEvent } = useEvent()
  const { data: session } = useSession()
  const userId = session?.user?.id
  const dispatch = useDispatch()
  const userEvents = useSelector(state => state.eventsSlice.userEvents)


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

  if (!userEvents || userEvents.length === 0) {
    return (
      <EmptyDescription
        description="No hay eventos, favor de comunicarse con administración." />
    )
  }

  return (
    <div className="event-container">
      {selectedEvent ? (
        <>
          <TableActions
            dataSource={dataSource}
            selectedRowKeys={selectedRowKeys}
            setDataSource={setDataSource}
            setSelectedRowKeys={setSelectedRowKeys} />
          <Table
            size="small"
            bordered
            rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
            columns={columns}
            dataSource={dataSource} />
          <EventCard events={userEvents} />
        </>
      ) : (
        <div>
          <EmptyDescription
            description="Seleccione un evento para ver aquí sus detalles" />
          <EventCard events={userEvents} />
        </div>
      )}
    </div>
  )
}

export default EventTable
