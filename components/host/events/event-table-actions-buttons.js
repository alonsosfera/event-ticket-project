import { Button , Col , Flex , Grid , Row } from "antd"
import { FileTextOutlined , NumberOutlined , UnorderedListOutlined } from "@ant-design/icons"


const ActionsButtons = () => {
  const { xs, md, lg } = Grid.useBreakpoint()
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
  return(
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
  )
}

export default ActionsButtons