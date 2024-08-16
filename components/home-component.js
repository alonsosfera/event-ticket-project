import { Row , Col , Card , Image } from "antd"

const HomeComponent = () => {
  return (
    <Row
      className="home-component"
      gutter={[40, 24]}
      justify="center"
      align="middle">
      <Col span={24}>
        <h1>Home</h1>
        <h4>Próximo Evento: Cumple Claudia</h4>
        <Row gutter={[24, 24]} justify="center">
          <Col span={6}>
            <Card>
              <h5>Invitaciónes Enviadas</h5>
              50
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <h5>Invitaciónes por enviar</h5>
              103
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <h5>Invitados</h5>
              80
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <h5>Invitados restantes</h5>
              150
            </Card>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={[24, 24]} justify="center">
          <Col span={6}>
            <Card>
              <h4>Invitación</h4>
              <span>Actualizado hace 2 dias </span>
              <Image src="/party-invitation.png" alt="Party Invitation" />
            </Card>
          </Col>
          <Col span={18}>
            <Card>
              <h4>Acomodo de invitados</h4>
              <span>Actualizado hace 2 dias </span>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <h3>Próximos Eventos</h3>
        <Row gutter={[24, 24]} justify="center">
          <Col span={6}>
            <Card>
              <h5>14/04/2024</h5>
              <h3>50 Años Martha</h3>
            </Card>
          </Col>
          <Col span={6}>
            <Card>Contenido</Card>
          </Col>
          <Col span={6}>
            <Card>Contenido</Card>
          </Col>
          <Col span={6}>
            <Card>Contenido</Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HomeComponent
