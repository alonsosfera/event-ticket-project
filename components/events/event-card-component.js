import { Card, Button, Space } from "antd"
import React from "react"
import { useEvent } from "./event-context"

const EventCard = () => {
  const { setSelectedEvent } = useEvent()
  const { eventData } = useEvent()

  return (
    <>
      <Space
        className="card-space"
        direction="horizontal"
        size={16}
        wrap>
        {eventData.map((event, index) => {
          const cardClass = `card-container card-color-${(index % 4) + 1}`
          return (
            <Card
              key={index}
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
          )
        })}
      </Space>
    </>
  )

}

export default EventCard
