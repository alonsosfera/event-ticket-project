import { Row, Col, Typography, Button, Input, Space, message } from "antd"
import { SettingOutlined } from "@ant-design/icons"
import EventModal from "./owner-create-event-modal-component"
import { useState } from "react"

const EventButtons = () => {

  const [isCreateEventModalVisible, setIsCreateEventModalVisible] = useState(false)

  const showCreateEventModal = () => setIsCreateEventModalVisible(true)
  const closeCreateEventModal = () => setIsCreateEventModalVisible(false)

  const CreateEventSubmit = () => {
    message.open({
      content: "Se ha creado el evento",
      duration: 3
    })
  }

  return (
    <>
      <Row className="owner-header-buttons" gutter={[24, 0]}>
        <Col span={24} className="buttons-header">
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title className="page-title">Eventos</Typography.Title>
            </Col>
            <Col>
              <Button
                className="owner-buttons"
                onClick={showCreateEventModal}>
                Agregar evento
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row
            justify="end"
            align="middle"
            style={{ marginBottom: "25px" }}
            gutter={[28, 6]}>
            <Col
              xs={24}
              lg={12}>
              <Space.Compact>
                <Input />
                <Button
                  className="owner-buttons"
                  icon={<SettingOutlined />}>
                  Buscar
                </Button>
              </Space.Compact>
            </Col>
            <Col>
              <Button>
                Descargar
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>

      <EventModal
        visible={isCreateEventModalVisible}
        onCancel={closeCreateEventModal}
        onSubmit={CreateEventSubmit}  />
    </>
  )
}

export default EventButtons
