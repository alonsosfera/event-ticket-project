import { Row, Col, Button, Typography } from "antd"

const RoomsHeaderComponent = ({ showModal }) => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={2} className="title">Salones</Typography.Title>
      </Col>
      <Col>
        <Button type="primary" onClick={showModal}>
          Agregar salón
        </Button>
      </Col>
    </Row>
  )
}

export default RoomsHeaderComponent
