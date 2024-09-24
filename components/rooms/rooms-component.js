import { Button , Col , Row , Typography , Input , Space, Modal , List } from "antd"
import { SettingOutlined } from "@ant-design/icons"
import { useState } from "react"
import NewRoom from "@/components/rooms/new-room-component"
import RoomsTableComponent from "@/components/rooms/rooms-table-component"
import DescriptionListComponent from "@/components/shared/description-list-component"
import { dataSource, columns } from "@/components/rooms/rooms-data"

const Rooms = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = () => {
    setIsModalVisible(false)
  }

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
            <Col
              xs={24}
              lg={12}>
              <Space.Compact>
                <Input />
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
              <RoomsTableComponent dataSource={dataSource} columns={columns} />
            </Col>
            <Col xs={24} md={0}>
              <List
                dataSource={dataSource}
                renderItem={item => (
                  <List.Item>
                    <DescriptionListComponent items={[
                    { label: "Salón", value: item.room },
                    { label: "Capacidad", value: item.capacity },
                    { label: "Dirección", value: item.addres },
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
