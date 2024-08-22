import { Button, Col, Row, Typography, Input, Space, Table, Checkbox, Modal } from "antd"
import { SettingOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import NewUser from "@/components/user/new-user-component"
import { useState } from "react"

const Users = () => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleSubmit = values => {
    console.log("New user values:", values)
    setIsModalVisible(false)
  }

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      phone: "625 896 87 32",
      role: "ADMIN"
    },
    {
      key: "2",
      name: "John",
      phone: "614 121 58 98",
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
      title: "Nombre",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Teléfono",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Rol",
      dataIndex: "role",
      key: "role"
    },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => (
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
              <Typography.Title level={2} style={{ color: "#2F333C" }}>Lista de Usuarios</Typography.Title>
            </Col>
            <Col>
              <Button
                key="submit"
                onClick={showModal}
                style={{ backgroundColor: "#2F333C", color: "#fff", borderRadius: "0px" }}>
                Agregar Usuario
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
                  style={{ backgroundColor: "#2F333C", color: "#FFFF", borderRadius: "0px" }}>
                  Buscar
                </Button>
              </Space.Compact>
            </Col>
            <Col>
              <Button
                style={{ backgroundColor: "#2F333C", color: "#FFFF", borderRadius: "0px" }}>
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
        title="Nuevo Usuario"
        visible={isModalVisible}
        onCancel={handleCancel}
        width={381}
        footer={null}>
        <NewUser onCancel={handleCancel} onSubmit={handleSubmit} />
      </Modal>
    </>
  )
}

export default Users
