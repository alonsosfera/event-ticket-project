import { useState } from "react"
import { useSelector } from "react-redux"
import { SettingOutlined } from "@ant-design/icons"
import { Button, Col, Row, Typography, Input, Space } from "antd"

import UsersTable from "./users-table-component"
import UsersActions from "./user-actions-component"
import NewUserModal from "./user-modal-component"

const UsersComponent = () => {
  const { list, isLoading } = useSelector(state => state.usersSlice)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [searchText, setSearchText] = useState("")

  const showModal = () => setIsModalVisible(true)
  const handleCancel = () => setIsModalVisible(false)

  const filteredList = list?.filter(user =>
    user.name.toLowerCase().includes(searchText.toLowerCase()) ||
    user.phone.includes(searchText))

  const dataSource = filteredList?.map(({ id, ...user }) => ({
    key: id,
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
            <Input
              placeholder="Buscar usuario"
              onChange={e => setSearchText(e.target.value)}
              allowClear={true}
              value={searchText} />
            <Button
              type="primary"
              icon={<SettingOutlined />}>
              Buscar
            </Button>
          </Space.Compact>
        </Col>

        <UsersTable dataSource={dataSource} isLoading={isLoading} />
      </Row>

      <NewUserModal isModalVisible={isModalVisible} handleCancel={handleCancel} />
    </>
  )
}

export default UsersComponent
