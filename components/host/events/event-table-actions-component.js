import { Row, Col, Button, Divider, Flex, Grid } from "antd"
import { FileImageOutlined, UnorderedListOutlined, NumberOutlined, FileTextOutlined } from "@ant-design/icons"

const TableActions = ({ dataSource, selectedRowKeys, setDataSource, setSelectedRowKeys }) => {

  const { xs, md, lg } = Grid.useBreakpoint()

  const handleDigitalInvitation = () => {

  }

  const handleArrangeGuests = () => {

  }

  const handleLoadGuestList = () => {

  }

  const handleDownloadNumbering = () => {

  }

  const handleDownloadPasses = () => {

  }

  const handleBulkDelete = () => {
    //Borrar datos en masa
    const newDataSource = dataSource.filter(item => !selectedRowKeys.includes(item.key))
    setDataSource(newDataSource)
    setSelectedRowKeys([])
  }

  const handleSendInvitation = () => {

  }

  const handleAddGuests = () => {

  }

  return (
    <>
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
            </>)}
            <Button
              className="invitation-buttons"
              onClick={handleAddGuests}>
              Agregar invitados
            </Button>
          </Flex>
        </Col>
      </Row>
    </>
  )
}

export default TableActions