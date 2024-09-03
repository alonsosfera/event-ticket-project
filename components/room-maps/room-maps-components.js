import { Button, Col, Row, Typography, Modal, Input, Form } from "antd"
import { useState } from "react"
import EmptyDescription from "@/components/shared/empty-component"
import NewRoomMapComponent from "@/components/room-maps/new-room-map-component"

const RoomMaps = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleAddLayout = () => {
    setShowForm(true)
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
              xs={12} md={8}
              lg={4}>
              <Button
                key="submit"
                onClick={handleAddLayout}
                style={{ backgroundColor: "#2F333C", color: "#fff" }}>
                Agregar nuevo acomodo
              </Button>
            </Col>
          </Row>

          <Row
            justify="space-between" align="middle"
            style={{ marginTop: "10px" }}>
            <Col span={8}>
              Componente para lista de Mesas
            </Col>
            <Col style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }} span={16}>
              {showForm ? (
                <NewRoomMapComponent />
              ) : (
                <EmptyDescription  />
              )}
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
