import { Row, Col, Card } from "antd"

const HomeComponent = () => {
  return (
    <Row gutter={[40, 24]}>
      <Col span={24}>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card
              title="Proximo">
              Proximo
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Proximo">
              Proximo
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Proximo">
              Proximo
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Proximo">
              Proximo
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card title="Invitación">
              Contenido
            </Card>
          </Col>
          <Col span={18}>
            <Card title="Invitación">
              Contenido
            </Card>
          </Col>
        </Row>
      </Col>

      <Col span={24}>
        <Row gutter={[24, 24]}>
          <Col span={6}>
            <Card title="Proximo">
              Contenido
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Proximo">
              Contenido
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Proximo">
              Contenido
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Proximo">
              Contenido
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HomeComponent
