import { Button, Col, Row, Typography, Input, Space } from "antd"
import { SettingOutlined } from "@ant-design/icons"

const Users = () => {
  return (
    <>
      <Row style={{ background: "#F4F5F7", padding: "20px" }} gutter={[24, 0]}>
        <Col span={24} style={{ marginBottom: "10px" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={2}>Lista de Usuarios</Typography.Title>
            </Col>
            <Col>
              <Button
                key="submit"
                style={{ backgroundColor: "#2F333C", color: "#fff", borderRadius: "0px" }}>
                Agregar Usuario
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row
            justify="end" align="middle"
            gutter={[16, 0]}>
            <Col span={12}>
              <Space.Compact style={{ width: "100%" }}>
                <Input style={{ borderRadius: "0px" }} defaultValue="Buscar..." />
                <Button
                  icon={<SettingOutlined />}
                  style={{ backgroundColor: "#2F333C", color: "#FFFF", borderRadius: "0px" }}>
                  Buscar
                </Button>
              </Space.Compact>
            </Col>
            <Col>
              <Button
                style={{ backgroundColor: "#2F333C", color: "#FFFF", borderRadius: "0px" }}>
                Descargar
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Users