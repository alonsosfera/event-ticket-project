import TableActions from "./event-table-actions-component"
import { List, Typography, Button } from "antd"
import EmptyDescription from "../../shared/empty-component"
import EventCard from "@/components/events/event-card-component"
import { LeftOutlined } from "@ant-design/icons"
import DescriptionListComponent from "@/components/shared/description-list-component"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedEvent } from "@/slices/events-slice"

const { Title, Text } = Typography

const TableMobile = () => {
  const dispatch = useDispatch()
  const userEvents = useSelector(state => state.eventsSlice.list)
  const selectedEvent = useSelector(state => state.eventsSlice.selectedEvent)

  const handleBack = () => {
    dispatch(setSelectedEvent(null))
  }

  const getSelectedGuests = () => {
    if (!selectedEvent) return []
    const event = userEvents.find(event => event.id === selectedEvent.id)
    return event?.guests || []
  }

  const selectedGuests = getSelectedGuests()

  if (!userEvents || userEvents.length === 0) {
    return (
      <EmptyDescription
        description="No hay eventos, favor de comunicarse con administración." />
    )
  }

  return (
    <div className="event-container">
      {selectedEvent && (
        <Button
          type="text"
          className="back-button"
          icon={<LeftOutlined className="icon-back" />}
          onClick={handleBack}>
        </Button>
      )}
      {selectedEvent ? (
        <>
          <TableActions selectedEvent={selectedEvent} />
          <List
            dataSource={selectedGuests}
            renderItem={item => (
              <List.Item>
                <DescriptionListComponent items={[
                  { label: <Text strong>Familia</Text>, value: item.name },
                  { label: <Text strong>Invitados</Text>, value: item.guestQuantity },
                  { label: <Text strong>WhatsApp</Text>, value: item.phone },
                  { label: <Text strong>Estatus</Text>, value: item.status || "Pendiente" }
                ]} />
              </List.Item>
            )} />
        </>
      ) : (
        <div>
          <Title className="title-event">Eventos</Title>
          <EventCard
            events={userEvents}
            clickable={true} />
        </div>
      )}
    </div>
  )
}

export default TableMobile
