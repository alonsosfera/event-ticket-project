import { Row, Col, Typography, Button, Input, Space, message } from "antd"
import { SettingOutlined } from "@ant-design/icons"
import EventModal from "./owner-create-event-modal-component"
import { useState } from "react"

const EventButtons = ({ onSearch }) => {
  const [isCreateEventModalVisible, setIsCreateEventModalVisible] = useState(false)
  const [searchText, setSearchText] = useState("")

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
      <Row align="middle" gutter={[24, 12]}>
        <Col
          xs={24} md={19}
          xl={21} order={1}>
          <Typography.Title className="page-title">Eventos</Typography.Title>
        </Col>
        <Col
          xs={{ span: 12, order: 3 }} md={{ span: 5, order: 2 }}
          xl={3}>
          <Button
            key="submit"
            type="primary"
            onClick={showCreateEventModal}
            style={{ width: "100%" }}>
            Agregar evento
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
            <Input
              placeholder="Buscar eventos"
              value={searchText}
              onChange={e => {
                setSearchText(e.target.value)
                onSearch(e.target.value)
              }} />
            <Button type="primary" icon={<SettingOutlined />}>
              Buscar
            </Button>
          </Space.Compact>
        </Col>
      </Row>

      <EventModal
        visible={isCreateEventModalVisible}
        onCancel={closeCreateEventModal}
        onSubmit={CreateEventSubmit} />
    </>
  )
}

export default EventButtons
