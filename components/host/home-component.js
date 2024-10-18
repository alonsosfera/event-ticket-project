import { Row, Col, Card, Image, Statistic, Typography, message } from "antd"
import { useEffect, useCallback } from "react"
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

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  return (
    <Row
      className="home-component"
      gutter={[16, 24]}
      justify="center"
      align="middle">
      <Col span={24}>
        <Typography.Title level={1}>Home</Typography.Title>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={5}>Próximo Evento: Cumple Claudia</Typography.Title>
          </Col>
          <Col>
            <Text type="secondary">28/04/2024</Text>
          </Col>
        </Row>

        <Row gutter={[16, 24]} justify="center">
          <Col
            xs={12} sm={12}
            md={6}>
            <Card>
              <Statistic title="Invitaciones enviadas" value={50} />
            </Card>
          </Col>
          <Col
            xs={12} sm={12}
            md={6}>
            <Card>
              <Statistic title="Invitaciones por enviar" value={103} />
            </Card>
          </Col>
          <Col
            xs={0} sm={12}
            md={6}>
            <Card>
              <Statistic title="Invitados" value={80} />
            </Card>
          </Col>
          <Col
            xs={0} sm={12}
            md={6}>
            <Card>
              <Statistic title="Invitados restantes" value={150} />
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[16, 24]} justify="center">
          <Col
            xs={24} md={12}
            lg={6}>
            <Card className="card-color">
              <Typography.Title level={5}>Invitación</Typography.Title>
              <Text type="secondary">Actualizada hace 2 días</Text>
              <Image src="/party-invitation.png" alt="Party Invitation" />
            </Card>
          </Col>
          <Col
            xs={24} md={12}
            lg={18}>
            <Card className="card-color">
              <Typography.Title level={5}>Acomodo de invitados</Typography.Title>
              <Text type="secondary">Actualizada hace 2 días</Text>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="no-border-col">
        <Title level={5}>Próximos Eventos</Title>
        <Row gutter={[16, 24]} justify="center">
          {events?.slice(0, 4).map((event, index) => (
            <Col
              key={index} xs={24}
              sm={12} md={6}>
              <Card className="card-color">
                <Statistic
                  title={dayjs(event.eventDate).format("DD/MM/YYYY")}
                  value={event.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default HomeComponent
