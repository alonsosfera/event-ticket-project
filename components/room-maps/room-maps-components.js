import { Button, Col, Row, Typography, Modal } from "antd"
import { useState } from "react"

const RoomMaps = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Row style={{ padding: "20px" }} gutter={[24, 0]}>
        <Col span={24} style={{ marginBottom: "10px" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={2} style={{ color: "#2F333C" }}>
                Usuarios
              </Typography.Title>
            </Col>
            <Col
              xs={12} md={4}
              lg={4}>
              <Button
                key="submit"
                onClick={showModal}
                style={{ backgroundColor: "#2F333C", color: "#fff" }}>
                Agregar nuevo acomodo
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Nuevo Usuario"
        open={isModalVisible}
        onCancel={handleCancel}
        cancelText="Cancelar"
        okText="Guardar"
        width={381}>
        Modal Acomodo
      </Modal>
    </>
  )
}

export default RoomMaps
