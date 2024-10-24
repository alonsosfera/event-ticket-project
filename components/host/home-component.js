import { Row, Col, Card, Image, Statistic, Typography, message } from "antd"
import { useEffect, useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { useSession } from "next-auth/react"
import { setEventsList } from "@/slices/events-slice"
import dayjs from "dayjs"

const HomeComponent = () => {
  const { Text, Title } = Typography
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const userId = session?.user?.id
  const events = useSelector(state => state.eventsSlice.list)
  const [firstEventDetails, setFirstEventDetails] = useState(null)

  const fetchEvents = useCallback(async () => {
    if (userId) {
      try {
        const response = await axios.get("/api/events/list", { params: { userId } })
        dispatch(setEventsList(response.data))
      } catch (error) {
        console.error("Error al traer los eventos:", error)
        message.error("Error al obtener los eventos")
      }
    }
  }, [userId, dispatch])

  const fetchFirstEventDetails = async eventId => {
    try {
      const response = await axios.get(`/api/events/${eventId}`)
      setFirstEventDetails(response.data)
    } catch (error) {
      console.error("Error al obtener el evento:", error)
      message.error("Error al obtener los detalles del evento")
    }
  }

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = dayjs(a.eventDate)
    const dateB = dayjs(b.eventDate)
    return dateA.isAfter(dayjs()) ? (dateB.isBefore(dayjs()) ? -1 : dateA.diff(dateB)) : (dateB.isAfter(dayjs()) ? 1 : dateB.diff(dateA))
  })

  useEffect(() => {
    if (sortedEvents.length && !firstEventDetails) {
      fetchFirstEventDetails(sortedEvents[0].id)
    }
  }, [sortedEvents, firstEventDetails])


  const totalGuestQuantity = firstEventDetails?.guests?.reduce((acc, guest) => acc + guest.guestQuantity, 0) || 0
  const remainingInvitations = firstEventDetails?.eventHall?.capacity - totalGuestQuantity || 0

  const renderStatisticCard = (title, value) => (
    <Col
      xs={12} sm={12}
      md={6}>
      <Card>
        <Statistic title={title} value={value} />
      </Card>
    </Col>
  )

  return (
    <Row
      className="home-component" gutter={[16, 24]}
      justify="center" align="middle">
      <Col span={24}>
        <Title level={1}>Home</Title>
        <Row justify="space-between" align="middle">
          <Col>
            <Title level={5}>
              Próximo Evento: {sortedEvents[0] ? sortedEvents[0].name : "No hay próximos eventos"}
            </Title>
          </Col>
          <Col>
            <Text type="secondary">
              {sortedEvents[0] ? dayjs(sortedEvents[0].eventDate).format("DD/MM/YYYY") : ""}
            </Text>
          </Col>
        </Row>

        <Row gutter={[16, 24]} justify="center">
          {renderStatisticCard("Invitaciones enviadas", 50)}
          {renderStatisticCard("Invitaciones por enviar", 103)}
          {renderStatisticCard("Invitados", totalGuestQuantity)}
          {renderStatisticCard("Invitados restantes", remainingInvitations)}
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[16, 24]} justify="center">
          <Col
            xs={24} md={12}
            lg={6}>
            <Card className="card-color">
              <Title level={5}>Invitación</Title>
              <Text type="secondary">Actualizada hace 2 días</Text>
              <Image src="/party-invitation.png" alt="Party Invitation" />
            </Card>
          </Col>
          <Col
            xs={24} md={12}
            lg={18}>
            <Card className="card-color">
              <Title level={5}>Acomodo de invitados</Title>
              <Text type="secondary">Actualizada hace 2 días</Text>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="no-border-col">
        <Title level={5}>Próximos Eventos</Title>
        <Row gutter={[16, 24]} justify="center">
          {sortedEvents.slice(0, 4).map((event, index) => (
            <Col
              key={index} xs={24}
              sm={12} md={6}>
              <Card className="card-color">
                <Statistic title={dayjs(event.eventDate).format("DD/MM/YYYY")} value={event.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default HomeComponent
