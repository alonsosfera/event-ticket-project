import { Card, Col, Row } from "antd"

const EventCard = ({ events, setSelectedEvent, clickable, cursor }) => {
  return (
    <Row justify={"center"} gutter={[16, 6]}>
      {events?.slice(0, 4).map((event, index) => {
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
              onClick={clickable ? () => setSelectedEvent(event) : null}
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
