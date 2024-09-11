import { Modal , Row , Col, Upload , Typography } from "antd"
import { InboxOutlined } from "@ant-design/icons"

const { Dragger } = Upload

const ConfigInvitationDigital = ({ visible, onCancel }) => {

  const uploadProps = {
    name: "file",
    multiple: true,
    action: "/upload.do",
    onChange(info) {
      const { status } = info.file
      if (status !== "uploading") {
        console.log(info.file, info.fileList)
      }
      if (status === "done") {
        console.log(`${info.file.name} file uploaded successfully.`)
      } else if (status === "error") {
        console.log(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <Modal
      title="Configura tu invitación"
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={870}>
      <Row gutter={[16, 16]}>
        <Col md={24}>
          <Typography>Selecciona el diseño </Typography>
          <Dragger {...uploadProps}>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Carga tu diseño </p>
          </Dragger>
        </Col>
        <Col md={24}>
          Columna 2
        </Col>
      </Row>
    </Modal>
  )
}

export default ConfigInvitationDigital
