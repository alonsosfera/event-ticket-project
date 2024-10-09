import { Button , Col , Flex , Grid , Row, message } from "antd"
import { FileTextOutlined , NumberOutlined , UnorderedListOutlined } from "@ant-design/icons"
import { useState } from "react"
import axios from "axios"
import InvitateGuestModal from "./event-modal-invitations"
import { useDispatch } from "react-redux"
import { createGuest } from "@/slices/guests-slice"

const ActionsButtons = () => {

  const dispatch = useDispatch()

  const { xs, md, lg } = Grid.useBreakpoint()

  const [isInvitateGuestModalVisible, setIsInvitateGuestModalVisible] = useState(false)

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

  const handleSubmitModal = async values => {
    try {
      const response = await axios.post("/api/guest/create", {
        name: values.familyName,
        guestQuantity: values.numberGuests,
        phone: values.phone,
        eventId: "4a63afb6-604d-49f7-bbf0-c906c3917ff6"
      })

      if (response.data.success) {
        dispatch(createGuest(response.data))
        message.open({
          content: "Invitado agregado correctamente",
          duration: 3
        })
      } else {
        message.error(response.data.message || "Error al agregar el invitado")
      }
    } catch (error) {
      message.error("Error al procesar la solicitud")
      console.error(error)
    } finally {
      setIsInvitateGuestModalVisible(false)
    }
  }

  return(

    <>
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
    </>
  )
}

export default ActionsButtons