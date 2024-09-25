import { useState } from "react"
import { useSelector } from "react-redux"
import { SettingOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { Button, Col, Row, Typography, Input, Space, Modal, List } from "antd"

import NewUser from "@/components/user/new-user-component"
import UsersTableComponent from "@/components/user/users-table-component"
import DescriptionListComponent from "@/components/shared/description-list-component"
import LoadingComponent from "../shared/loading-component"

const UsersComponent = () => {
  const { list, isLoading } = useSelector(state => state.usersSlice)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => setIsModalVisible(true)
  const handleCancel = () => setIsModalVisible(false)

  const dataSource = list?.map(({ id, ...user }) => ({
    key: user.id,
    role: user.role,
    name: user.name,
    phone: user.phone
  }))

  return (
    <>
      <Row align="middle" gutter={[24, 12]}>
        <Col
          xs={24} md={19}
          xl={21}>
          <Typography.Title className="page-title">Usuarios</Typography.Title>
        </Col>

        <UsersActions showModal={showModal} />

        <Col
          xs={24}
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
          <LoadingComponent />
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

      <NewUserModal isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </>
  )
}

export default UsersComponent
