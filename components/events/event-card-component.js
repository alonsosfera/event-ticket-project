import { Card, Button, Row, Col } from "antd"
import React from "react"
import { useEvent } from "./event-context"

const EventCard = () => {
  const { setSelectedEvent } = useEvent()
  const { eventData } = useEvent()

  return (
    <>
      <Row gutter={[16,6]}>
        {eventData.map((event, index) => {
          const cardClass = `card-container card-color-${(index % 4) + 1}`
          return (
            <Col
              key={index}
              xs={24} sm={24}
              md={12} lg={12}
              xl={6}>
              <Card
                className={cardClass}
                title={<span title={event.title} className="card-title">{event.title}</span>}
                extra={
                  <Button
                    type="link"
                    className="card-extra"
                    onClick={() => setSelectedEvent(event)}>
                    Ver detalles
                  </Button>
                }>
                <div className="card-content">
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
                <div className="card-invites">
                  <span>{event.totalInvites} invitados</span>
                  <span>{event.remainingInvites} invitados restantes</span>
                </div>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  )

}

export default EventCard
