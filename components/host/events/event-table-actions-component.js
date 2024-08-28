import { Row, Col, Button, Divider } from "antd"
import { FileImageOutlined, UnorderedListOutlined, NumberOutlined, FileTextOutlined } from "@ant-design/icons"

const TableActions = ({ dataSource, selectedRowKeys, setDataSource, setSelectedRowKeys, showFullView = true }) => {

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
      {showFullView ? (
        <>
          <Row gutter={16}>
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
          <Row className="row-buttons" gutter={16}>
            <Col>
              <Button
                type="text"
                icon={<UnorderedListOutlined />}
                onClick={handleLoadGuestList}>
                Cargar lista de invitados
              </Button>
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
            </Col>
            <Col className="col-buttons">
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
              <Button
                className="invitation-buttons"
                onClick={handleAddGuests}>
                Agregar invitados
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row gutter={16}>
            <Col className="col-buttons">
              <Button
                icon={<FileImageOutlined />}
                onClick={handleDigitalInvitation}>
                Invitación digital
              </Button>
              <Button onClick={handleArrangeGuests}>
                Acomodo de invitados
              </Button>
            </Col>
          </Row>
          <Divider />
          <Row gutter={16}>
            <Col className="col-buttons-download">
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
            </Col>
          </Row>
          <Row>
            <Col>
              <Button
                className="invitation-buttons"
                onClick={handleAddGuests}>
                Agregar invitados
              </Button>
            </Col>
          </Row>
        </>
      )}
    </>
  )
}

export default TableActions