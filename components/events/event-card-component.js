import { Card, Col, Row } from "antd"
import { useDispatch } from "react-redux"
import { setSelectedEvent } from "@/slices/events-slice"
import { useEffect } from "react"
import dayjs from "dayjs"
import "dayjs/locale/es"

const getSortedEvents = events => {
  const currentDate = dayjs()

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = dayjs(a.eventDate)
    const dateB = dayjs(b.eventDate)

    if (dateA.isAfter(currentDate) && dateB.isBefore(currentDate)) return -1
    if (dateA.isBefore(currentDate) && dateB.isAfter(currentDate)) return 1
    if (dateA.isAfter(currentDate) && dateB.isAfter(currentDate)) return dateA.diff(dateB)
    return dateB.diff(dateA)

  })

  const closestEvent = sortedEvents[0]
  return { sortedEvents, closestEvent }
}

const EventCard = ({ events, clickable, cursor }) => {
  const dispatch = useDispatch()

  const { sortedEvents, closestEvent } = getSortedEvents(events)

  useEffect(() => {
    if (closestEvent) {
      dispatch(setSelectedEvent(closestEvent))
    }
  }, [])

  return (
    <Row justify={"center"} gutter={[16, 6]}>
      {sortedEvents?.map((event, index) => {
        const cardClass = `card-container card-color-${(index % 4) + 1}`
        const formattedDate = dayjs(event.eventDate).locale("es").format("DD/MM/YYYY")

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