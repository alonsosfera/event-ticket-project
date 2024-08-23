import { Button, Col, Row, Typography, Input, Space, Table, Checkbox, Modal } from "antd"
import { SettingOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useState } from "react"
import NewRoom from "@/components/rooms/new-room-component"

const Rooms = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = values => {
    (values)
    setIsModalVisible(false)
  }

  const dataSource = [
    {
      key: "1",
      room: "Aduitorio Telmex",
      capacity: "150",
      addres: "Avenida solidaridad 3100, col. El Marques, CUU",
      role: "ADMIN"
    },
    {
      key: "2",
      room: "Manuel Bernadrdo",
      capacity: "300",
      addres: "Avenida solidaridad 3100, col. El Marques, CUU",
      role: "HOST"
    }
  ]

  const columns = [
    {
      title: "",
      dataIndex: "checkbox",
      key: "checkbox",
      render: () => <Checkbox />
    },
    {
      title: "Salón",
      dataIndex: "room",
      key: "room"
    },
    {
      title: "Capacidad",
      dataIndex: "capacity",
      key: "capacity"
    },
    {
      title: "Dirección",
      dataIndex: "addres",
      key: "addres"
    },
    {
      title: "Imágenes",
      dataIndex: "image",
      key: "image"
    },
    {
      title: "Acciones",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button shape="circle" icon={<EditOutlined />} />
          <Button
            shape="circle" icon={<DeleteOutlined />} />
        </Space>
      )
    }
  ]

  return (
    <>
      <Row style={{ background: "#F4F5F7", padding: "20px" }} gutter={[24, 0]}>
        <Col span={24} style={{ marginBottom: "10px" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={2} style={{ color: "#2F333C" }}>Lista de salones</Typography.Title>
            </Col>
            <Col>
              <Button
                key="submit"
                onClick={showModal}
                style={{ backgroundColor: "#2F333C", color: "#fff" }}>
                Agregar salón
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row
            justify="end"
            align="middle"
            style={{ marginBottom: "25px" }}
            gutter={[16, 0]}>
            <Col span={12}>
              <Space.Compact style={{ width: "100%" }}>
                <Input style={{ borderRadius: "0px" }} />
                <Button
                  icon={<SettingOutlined />}
                  style={{ backgroundColor: "#2F333C", color: "#FFFF" }}>
                  Buscar
                </Button>
              </Space.Compact>
            </Col>
            <Col>
              <Button
                style={{ backgroundColor: "#2F333C", color: "#FFFF" }}>
                Descargar
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Table dataSource={dataSource} columns={columns} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Nuevo salón"
        visible={isModalVisible}
        onCancel={handleCancel}
        cancelLabel="Cancelar"
        onOk={handleSubmit}
        okText="Agregar"
        width={433}>
        <NewRoom onCancel={handleCancel} onSubmit={handleSubmit} />
      </Modal>
    </>
  )
}

export default Rooms