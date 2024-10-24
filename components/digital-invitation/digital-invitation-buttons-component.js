import { Row, Col, Typography, Button, Input, Space } from "antd"
import { SettingOutlined } from "@ant-design/icons"

const DigitalInvitationButtons = ({ setShowNewDesign }) => {
  const handleNewDesign = () => {
    setShowNewDesign(true)
  }

  return (
    <Row
      align="middle" gutter={[24, 12]}
      style={{ marginBottom: "10px" }}>
      <Col
        xs={24} md={19}
        xl={21} order={1}>
        <Typography.Title className="page-title">Invitación Digital</Typography.Title>
      </Col>
      <Col
        xs={{ span: 12, order: 3 }} md={{ span: 5, order: 2 }}
        xl={3}>
        <Button
          key="submit"
          type="primary"
          style={{ width: "100%" }}
          onClick={handleNewDesign}>
          Nuevo Diseño
        </Button>
      </Col>
      <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 3 }}>
        <Button style={{ width: "100%" }}>Descargar</Button>
      </Col>
      <Col
        xs={24}
        order={4}
        lg={{ span: 12, offset: 8 }}
        xl={{ span: 8, offset: 12 }}
        xxl={{ span: 6, offset: 14 }}>
        <Space.Compact style={{ width: "100%" }}>
          <Input placeholder="Buscar diseños" allowClear={true} />
          <Button type="primary" icon={<SettingOutlined />}>
            Buscar
          </Button>
        </Space.Compact>
      </Col>
    </Row>
  )
}

export default DigitalInvitationButtons
