import { Row, Col, Space, Input, Button } from "antd"
import { SettingOutlined } from "@ant-design/icons"

const RoomsSearchComponent = () => {
  return (
    <Row
      justify="end" align="middle"
      style={{ marginBottom: "25px" }} gutter={[28, 6]}>
      <Col xs={24} lg={12}>
        <Space.Compact>
          <Input placeholder="Buscar salón" />
          <Button icon={<SettingOutlined />}>
            Buscar
          </Button>
        </Space.Compact>
      </Col>
      <Col>
        <Button>Descargar</Button>
      </Col>
    </Row>
  )
}

export default RoomsSearchComponent
