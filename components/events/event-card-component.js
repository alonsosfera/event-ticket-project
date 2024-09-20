import { useEvent } from "@/components/events/event-context"
import { Card , Col , Row } from "antd"

const EventCard = ({ events }) => {
  const { setSelectedEvent } = useEvent()

  return (
    <Row justify={"center"} gutter={[16, 6]}>
      {events?.map((event, index) => {
        const cardClass = `card-container card-color-${(index % 4) + 1}`
        return (
          <Col
            key={index}
            xs={24} sm={24}
            md={12} lg={12}
            xl={6}>
            <Card
              className={cardClass}
              title={<span title={event.name} className="card-title">{event.name}</span>}
              onClick={() => setSelectedEvent(event)}
              hoverable>
              <div className="card-content">
                <p>{event.eventDate}</p>
                <p>{event.eventHall}</p>
              </div>
              <div className="card-invites">
                <span>{event.guestQuantity} invitados</span>
                <span>{event.guestQuantity} invitados restantes</span>
              </div>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default EventCard