import { useState } from "react"
import { useSelector } from "react-redux"
import { SettingOutlined, EditOutlined, DeleteOutlined, LoadingOutlined } from "@ant-design/icons"
import { Button, Col, Row, Typography, Input, Space, Modal, List, Flex, Spin } from "antd"

import NewUser from "@/components/user/new-user-component"
import UsersTableComponent from "@/components/user/users-table-component"
import DescriptionListComponent from "@/components/shared/description-list-component"

const UsersComponent = () => {
  const { list, isLoading } = useSelector(state => state.usersSlice)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const dataSource = list?.map(({ id, ...user }) => ({
    key: user.id,
    role: user.role,
    name: user.name,
    phone: user.phone
  }))

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
      <Row align="middle" gutter={[24, 12]}>
        <Col
          xs={24}
          md={19}
          xl={21}
          order={1}>
          <Typography.Title className="page-title">Usuarios</Typography.Title>
        </Col>
        <Col
          xs={{ span: 12, order: 3 }}
          md={{ span: 5, order: 2 }}
          xl={3}>
          <Button
            key="submit"
            type="primary"
            onClick={showModal}
            style={{ width: "100%" }}>
            Agregar Usuario
          </Button>
        </Col>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 3 }}>
          <Button style={{ width: "100%" }}>Descargar</Button>
        </Col>
        <Col
          xs={24}
          order={4}
          lg={{ span: 12, offset: 8 }}
          xl={{ span: 8, offset: 12 }}
          xxl={{ span: 6, offset: 14 }}>
          <Space.Compact style={{ width: "100%" }}>
            <Input />
            <Button
              type="primary"
              icon={<SettingOutlined />}>
              Buscar
            </Button>
          </Space.Compact>
        </Col>

        {isLoading ? (
          <Col order={5} span={24}>
            <Flex
              align="center"
              justify="center"
              style={{ height: "10vh" }}>
              <Spin indicator={<LoadingOutlined spin />} size="large" />
            </Flex>
          </Col>
        ) : (
          <>
            <Col
              xs={0}
              md={24}
              order={5}>
              <UsersTableComponent
                dataSource={dataSource}
                columns={columns}
                rowSelection={rowSelection} />
            </Col>
            <Col
              md={0}
              xs={24}
              order={5}>
              <List
                dataSource={dataSource}
                renderItem={item => (
                  <List.Item>
                    <DescriptionListComponent items={[
                      { label: "Nombre", value: item.name },
                      { label: "Teléfono", value: item.phone },
                      { label: "Rol", value: item.role }
                    ]} />
                  </List.Item>
                )} />
            </Col>
          </>
        )}
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

export default UsersComponent
