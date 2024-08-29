import React from "react"
import { Row, Col, Typography } from "antd"

const { Title, Text } = Typography

const EventHeader = ({ selectedEvent }) => {
  if (!selectedEvent) {
    return (
      null
    )
  }
  return (
    <>
      <Col
        xs={0} md={24}
        className="title">
        <Title className="page-title">Tus eventos</Title>
      </Col>
      <Row gutter={16} className="row-header">
        <Col span={12}>
          <Text>{selectedEvent.location}</Text>
        </Col>
        <Col span={12} className="col-date">
          <Text>{selectedEvent.date}</Text>
        </Col>
      </Row>
      <Row gutter={16} className="row-header">
        <Col span={24}>
          <Title level={2} className="col-title-event">
            {selectedEvent.title}
          </Title>
        </Col>
      </Row>
      <Row gutter={16} className="row-header">
        <Col span={12}>
          <Text>{selectedEvent.totalInvites} invitados</Text>
        </Col>
        <Col span={12} className="col-invitate">
          <Text>{selectedEvent.remainingInvites} invitados restantes</Text>
        </Col>
      </Row>
    </>
  )
}

export default EventHeader