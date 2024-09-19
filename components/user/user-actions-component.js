import { Col, Button } from "antd"

const UsersActions = ({ showModal }) => (
  <>
    <Col
      xs={{ span: 12 }} md={{ span: 5 }}
      xl={3}>
      <Button
        type="primary" onClick={showModal}
        style={{ width: "100%" }}>
        Agregar Usuario
      </Button>
    </Col>
    <Col xs={{ span: 12 }} md={4}>
      <Button style={{ width: "100%" }}>Descargar</Button>
    </Col>
  </>
)

export default UsersActions
