import { Row, Col, Button, Typography } from "antd"

const RoomsHeaderComponent = ({ onShowModal }) => {
  return (
    <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={2} className="title">Salones</Typography.Title>
      </Col>
      <Col>
        <Button type="primary" onClick={onShowModal}>
          Agregar salón
        </Button>
      </Col>
    </Row>
  )
}

export default RoomsHeaderComponent
