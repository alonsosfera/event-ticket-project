import { Button, Col, Row, Typography, Input, Space, Checkbox, Modal, List } from "antd"
import { DeleteOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons"
import { useState } from "react"
import NewRoom from "@/components/rooms/new-room-component"
import RoomsTableComponent from "@/components/rooms/rooms-table-component"
import DescriptionListComponent from "@/components/shared/description-list-component"
import { useSelector } from "react-redux"

const Rooms = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = values => {
    values
    setIsModalVisible(false)
  }

  const rooms = useSelector(state => state.roomsSlice.list)

const columns = [
  {
    title: "",
    dataIndex: "checkbox",
    key: "checkbox",
    render: () => <Checkbox />
  },
  {
    title: "Salón",
    dataIndex: "name",
    key: "room"
  },
  {
    title: "Capacidad",
    dataIndex: "capacity",
    key: "capacity",
    render: text => text || "No disponible"
  },
  {
    title: "Dirección",
    dataIndex: "locationUrl",
    key: "address"
  },
  {
    title: "Imágenes",
    dataIndex: "image",
    key: "image",
    render: text => text || "No disponible"
  },
  {
    title: "Acciones",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button shape="circle" icon={<EditOutlined />} />
        <Button shape="circle" icon={<DeleteOutlined />} />
      </Space>
    )
  }
]

  return (
    <>
      <Row className="rooms-container" gutter={[24, 0]}>
        <Col span={24} className="rooms-header">
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={2} className="title">Salones</Typography.Title>
            </Col>
            <Col>
              <Button
                key="submit"
                type="primary"
                onClick={showModal}>
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
            gutter={[28, 6]}>
            <Col xs={24} lg={12}>
              <Space.Compact>
                <Input placeholder="Buscar salón" />
                <Button
                  icon={<SettingOutlined />}>
                  Buscar
                </Button>
              </Space.Compact>
            </Col>
            <Col>
              <Button>
                Descargar
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col xs={0} md={24}>
              <RoomsTableComponent dataSource={rooms} columns={columns} />
            </Col>
            <Col xs={24} md={0}>
              <List
                dataSource={rooms}
                renderItem={item => (
                  <List.Item key={item.id}>
                    <DescriptionListComponent items={[
                      { label: "Salón", value: item.room },
                      { label: "Capacidad", value: item.capacity },
                      { label: "Dirección", value: item.address },
                      { label: "Imágenes", value: item.image }
                    ]} />
                  </List.Item>
                )} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Nuevo salón"
        open={isModalVisible}
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
