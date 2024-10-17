import React from "react"
import { Row, Col, Typography, Flex } from "antd"
import { useSelector } from "react-redux"

const { Title, Text } = Typography

const EventHeader = () => {
  const selectedEvent = useSelector(state => state.eventsSlice.selectedEvent)

  if (!selectedEvent) {
    return null
  }

  const eventDate = new Date(selectedEvent.eventDate)
  const formattedDate = eventDate.toLocaleDateString("es-ES")

  return (
    <>
      <Col
        xs={0} md={24}
        className="title">
        <Title className="page-title">Tus eventos</Title>
      </Col>
      <Row gutter={16} className="row-header">
        <Col span={12}>
          <Text>{selectedEvent.eventHall.name}</Text>
        </Col>
        <Col span={12}>
          <Flex justify="end">
            <Text>{formattedDate}</Text>
          </Flex>
        </Col>
      </Row>
      <Row gutter={16} className="row-header">
        <Col span={24}>
          <Title level={2} className="col-title-event">
            {selectedEvent.name}
          </Title>
        </Col>
      </Row>
      <Row gutter={16} className="row-header">
        <Col span={12}>
          <Text>{selectedEvent.guestQuantity} invitados</Text>
        </Col>
        <Col span={12}>
          <Flex justify="end">
            <Text>{selectedEvent.remainingInvites} invitados restantes</Text>
          </Flex>
        </Col>
      </Row>
    </>
  )
}

export default EventHeader
