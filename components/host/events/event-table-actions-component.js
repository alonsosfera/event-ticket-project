import { Row, Col, Button, Divider, Flex, Grid, Modal, Typography } from "antd"
import { FileImageOutlined, UnorderedListOutlined, NumberOutlined, FileTextOutlined } from "@ant-design/icons"
import EventHeader from "./event-header-component"
import { useEvent } from "../../events/event-context"
import InvitateGuestModal from "./event-modal-invitations"
import { useState } from "react"
import ConfigInvitationDigital from "@/components/host/events/event-modal-invitation-digital-component"

const TableActions = ({ dataSource, selectedRowKeys, setDataSource, setSelectedRowKeys }) => {
  const { selectedEvent } = useEvent()
  const { xs, md, lg } = Grid.useBreakpoint()

  const [isDigitalInvitationModalVisible, setIsDigitalInvitationModalVisible] = useState(false)
  const [isInvitateGuestModalVisible, setIsInvitateGuestModalVisible] = useState(false)

  const handleDigitalInvitation = () => {
    setIsDigitalInvitationModalVisible(true)
  }

  const handleCancelDigitalInvitationModal = () => {
    setIsDigitalInvitationModalVisible(false)
  }

  const handleArrangeGuests = () => { }

  const handleLoadGuestList = () => { }

  const handleDownloadNumbering = () => { }

  const handleDownloadPasses = () => { }

  const handleBulkDelete = () => {
    const newDataSource = dataSource.filter(item => !selectedRowKeys.includes(item.key))
    setDataSource(newDataSource)
    setSelectedRowKeys([])
  }

  const handleSendInvitation = () => { }

  const handleAddGuests = () => {
    setIsInvitateGuestModalVisible(true)
  }

  const handleCancelModal = () => {
    setIsInvitateGuestModalVisible(false)
  }

  const handleSubmitModal = values => {
    values
    setIsInvitateGuestModalVisible(false)
  }

  return (
    <>
      <EventHeader selectedEvent={selectedEvent} />
      <Row justify={"end"} gutter={16}>
        <Col>
          <Button
            icon={<FileImageOutlined />}
            onClick={handleDigitalInvitation}>
            Invitación digital
          </Button>
        </Col>
        <Col>
          <Button onClick={handleArrangeGuests}>
            Acomodo de invitados
          </Button>
        </Col>
      </Row>
      <Divider />
      <Row justify={"space-between"}>
        <Col xs={24} xl={12}>
          <Flex justify={xs ? "end" : "start"} gap={12}>
            {md && <Button
              type="text"
              icon={<UnorderedListOutlined />}
              onClick={handleLoadGuestList}>
              Cargar lista de invitados
            </Button>}
            <Button
              type="text"
              icon={<NumberOutlined />}
              onClick={handleDownloadNumbering}>
              Descargar numeración
            </Button>
            <Button
              type="text"
              icon={<FileTextOutlined />}
              onClick={handleDownloadPasses}>
              Descargar pases
            </Button>
          </Flex>
        </Col>
        <Col xs={24} xl={12}>
          <Flex justify={lg || xs ? "end" : "start"} gap={12}>
            {md && (
              <>
                <Button
                  className="invitation-buttons"
                  onClick={handleBulkDelete}>
                  Eliminar
                </Button>
                <Button
                  className="invitation-buttons"
                  onClick={handleSendInvitation}>
                  Enviar invitación
                </Button>
              </>
            )}
            <Button
              className="invitation-buttons"
              onClick={handleAddGuests}>
              Agregar invitados
            </Button>
          </Flex>
        </Col>
      </Row>

      <InvitateGuestModal
        visible={isInvitateGuestModalVisible}
        onCancel={handleCancelModal}
        onSubmit={handleSubmitModal} />

      <ConfigInvitationDigital
        visible={isDigitalInvitationModalVisible}
        onCancel={handleCancelDigitalInvitationModal} />
    </>
  )
}

export default TableActions
