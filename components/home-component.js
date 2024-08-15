import { Row, Col } from "antd"


const HomeComponent = () => {
  return (
    <Row  style={{ background: "white", padding: "12px" }} gutter={[40, 24]}>
      <Col span={24}>
        <Row gutter={[24,24]}>
          <Col span={6} style={{ background: "blue" }}>Proximo</Col>
          <Col span={6} style={{ background: "blue" }}>Proximo</Col>
          <Col span={6} style={{ background: "blue" }}>Proximo</Col>
          <Col span={6} style={{ background: "blue" }}>Proximo</Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={16}>
          <Col span={6} style={{ background: "blue" }}>Invitación</Col>
          <Col span={18} style={{ background: "red" }}>Invitación</Col>
        </Row>
      </Col>
      <Col span={24}>
        <Row gutter={16}>
          <Col span={6} style={{ background: "red" }}>Proximo</Col>
          <Col span={6} style={{ background: "red" }}>Proximo</Col>
          <Col span={6} style={{ background: "red" }}>Proximo</Col>
          <Col span={6} style={{ background: "red" }}>Proximo</Col>
        </Row>
      </Col>
    </Row>
  )
}

export default HomeComponent
