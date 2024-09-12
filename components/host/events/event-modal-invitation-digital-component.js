import { Modal, Row, Col, Upload, Typography } from "antd"
import { useState } from "react"
import EmptyDescription from "@/components/shared/empty-component"
import { InboxOutlined } from "@ant-design/icons"

const ConfigInvitationDigital = ({ visible, onCancel }) => {
  const { Title } = Typography

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    },
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    }
  ])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  return (
    <Modal
      title="Configura tu invitación"
      open={visible}
      centered
      onCancel={onCancel}
      width={870}
      cancelText={"Cancelar"}
      okText={"Guardar invitación"}>
      <Row gutter={[16, 16]}>
        <Col md={24}>
          <Title level={5}>Selecciona el diseño</Title>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            iconRender={() => <InboxOutlined style={{ fontSize: 25 }} />}>
            {fileList.length < 5 && (
            <div>
              <InboxOutlined style={{ fontSize: 25 }} />
              <p className="ant-upload-text">Carga tu diseño</p>
            </div>
              )}
          </Upload>
        </Col>
        <Col md={24}>
          <Title level={5}>Aquí Componente Konva</Title>
          <EmptyDescription />
        </Col>
      </Row>
    </Modal>
  )
}

export default ConfigInvitationDigital
