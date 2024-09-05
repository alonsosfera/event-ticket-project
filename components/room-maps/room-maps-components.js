import { Button, Col, Row, Typography } from "antd"
import { useState } from "react"
import EmptyDescription from "@/components/shared/empty-component"
import NewRoomMapComponent from "@/components/room-maps/new-room-map-component"
import RoomMapsTable from "@/components/room-maps/room-maps-table-components"

const RoomMaps = () => {
  const [showForm, setShowForm] = useState(false)

  const handleSave = () => {
    setShowForm(false)
  }

  const handleAddLayout = () => {
    setShowForm(true)
  }

  const handleCancel = () => {
    setShowForm(false)
  }

  return (
    <>
      <Row style={{ padding: "20px" }} gutter={[24, 24]}>
        <Col span={24} style={{ marginBottom: "10px" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={2} style={{ color: "#2F333C" }}>
                Acomodo de Mesas
              </Typography.Title>
            </Col>
            <Col
              xs={0}
              md={8}
              lg={4}>
              <Button
                key="submit"
                onClick={handleAddLayout}
                style={{ backgroundColor: "#2F333C", color: "#fff" }}>
                Agregar nueva mesa
              </Button>
            </Col>
          </Row>

          <Row
            justify="space-between"
            align="top">
            <Col
              xs={24}
              md={8}
              lg={8}>
              <Col
                xs={0}
                md={0}
                lg={24}>
                <RoomMapsTable />
              </Col>
              <Col xs={24} sm={0}>
                <Typography.Title level={5}>Para modificar, ve la versión movil</Typography.Title>
              </Col>
            </Col>
            <Col
              span={16}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                height: "100%"
              }}>
              {showForm ? (
                <NewRoomMapComponent
                  onCancel={handleCancel}
                  onSave={handleSave} />
              ) : (
                <EmptyDescription />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default RoomMaps
