import { Row, Col, Card, Image, Statistic, Typography } from "antd"

const HomeComponent = () => {
  const { Text } = Typography

  return (
    <Row
      className="home-component" gutter={[40, 24]}
      justify="center" align="middle">
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
        <Row gutter={[36, 24]} justify="center">
          <Col span={6}>
            <Card>
              <Statistic title="Invitaciones enviadas" value={50} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Invitaciones por enviar" value={103} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Invitados" value={80} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="Invitados restantes" value={150} />
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[36, 24]} justify="center">
          <Col span={6}>
            <Card>
              <Typography.Title level={5}>Invitación</Typography.Title>
              <Text type="secondary">Actualizada hace 2 días</Text>
              <Image src="/party-invitation.png" alt="Party Invitation" />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
              <Typography.Title level={5}>Acomodo de invitados</Typography.Title>
              <Text type="secondary">Actualizada hace 2 días</Text>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24} className="no-border-col">
        <Typography.Title level={5}>Próximos Eventos</Typography.Title>
        <Row gutter={[36, 24]} justify="center">
          <Col span={6}>
            <Card>
              <Statistic title="14/04/2024" value={"50 Años Martha"} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="14/04/2024" value={"Xv Carla"} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="14/04/2024" value={"50 Años Martha"} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic title="14/04/2024" value={"50 Años Martha"} />
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HomeComponent
