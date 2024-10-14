import { Card, Col, Row } from "antd"
import { useDispatch } from "react-redux"
import { setSelectedEvent } from "@/slices/guests-slice"

const EventCard = ({ events, clickable, cursor }) => {
  const dispatch = useDispatch()

  return (
    <Row justify={"center"} gutter={[16, 6]}>
      {events?.map((event, index) => {
        const cardClass = `card-container card-color-${(index % 4) + 1}`
        const formattedDate = new Date(event.eventDate).toLocaleDateString("es-ES")

        return (
          <Col
            key={index} xs={24}
            sm={24} md={12}
            lg={12} xl={6}>
            <Card
              className={cardClass}
              title={
                <span title={event.name} className="card-title">
                  {index + 1}. {event.name}
                </span>
              }
              onClick={clickable ? () => {
                dispatch(setSelectedEvent(event))
              } : null}
              hoverable
              style={{ cursor }}>
              <div className="card-content">
                <p>{formattedDate}</p>
                <p>{typeof event.eventHall === "string" ? event.eventHall : event.eventHall?.name}</p>
              </div>
              <div className="card-invites">
                <span>{event.guestQuantity} invitados</span>
                <span>{event.remainingInvites} invitados restantes</span>
              </div>
            </Card>
          </Col>
        )
      })}
    </Row>
  )
}

export default EventCard
