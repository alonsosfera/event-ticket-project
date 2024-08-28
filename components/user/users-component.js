import { Button , Col , Row , Typography , Input , Space , Modal , List } from "antd"
import { SettingOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import NewUser from "@/components/user/new-user-component"
import { useState } from "react"
import UsersTableComponent from "@/components/user/users-table-component"
import DescriptionListComponent from "@/components/shared/description-list-component"

const Users = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
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
      render: () => (
        <Space size="middle">
          <Button shape="circle" icon={<EditOutlined />} />
          <Button shape="circle" icon={<DeleteOutlined />} />
        </Space>
      )
    }
  ]

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      return(`Selected Row Keys: ${selectedRowKeys}`, "Selected Rows: ", selectedRows)
    }
  }

  return (
    <>
      <Row style={{ padding: "20px" }} gutter={[24, 0]}>
        <Col span={24} style={{ marginBottom: "10px" }}>
          <Row justify="space-between" align="middle">
            <Col>
              <Typography.Title level={2} style={{ color: "#2F333C" }}>Usuarios</Typography.Title>
            </Col>
            <Col
              xs={9}
              md={4}
              lg={4}>
              <Button
                key="submit"
                onClick={showModal}
                style={{ backgroundColor: "#2F333C", color: "#fff" }}>
                Agregar Usuario
              </Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row
            justify="end" align="middle"
            gutter={[28, 6]}>
            <Col
              xs={24}
              md={18}
              lg={18}>
              <Space.Compact style={{ width: "100%" }}>
                <Input />
                <Button
                  icon={<SettingOutlined />}
                  style={{ backgroundColor: "#2F333C", color: "#FFFF" }}>
                  Buscar
                </Button>
              </Space.Compact>
            </Col>
            <Col xs={8} md={4}>
              <Button>Descargar</Button>
            </Col>
          </Row>
        </Col>

        <Col span={24}>
          <Row gutter={[24, 24]}>
            <Col
              xs={0} md={24}>
              <UsersTableComponent
                dataSource={dataSource}
                columns={columns}
                rowSelection={rowSelection} />
            </Col>
            <Col xs={24} md={0}>
              <List
                dataSource={dataSource}
                renderItem={item => (
                  <List.Item>
                    <DescriptionListComponent items={[
                      { label: "Nombre", value: item.name },
                      { label: "Telefono", value: item.phone },
                      { label: "Rol", value: item.role }
                    ]} />
                  </List.Item>
                )} />
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        title="Nuevo Usuario"
        open={isModalVisible}
        onCancel={handleCancel}
        cancel="Cancelar"
        okText="Guardar"
        width={381}>
        <NewUser />
      </Modal>
    </>
  )
}

export default Users
