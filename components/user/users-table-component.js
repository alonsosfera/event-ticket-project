import { Button , Col , List , Space , Spin , Table } from "antd"
import { LoadingOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import DescriptionListComponent from "@/components/shared/description-list-component"

const UsersTable = ({ dataSource, isLoading }) => {
  const columns = [
    { title: "Nombre", dataIndex: "name", key: "name" },
    { title: "Teléfono", dataIndex: "phone", key: "phone" },
    { title: "Rol", dataIndex: "role", key: "role" },
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
    ("Selected Row Keys: ", selectedRowKeys, "Selected Rows: ", selectedRows)
    }
  }

  if (isLoading) {
    return (
      <Col order={5} span={24}>
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      </Col>
    )
  }

  return (
    <>
      <Col xs={0} md={24}>
        <Table
          dataSource={dataSource} columns={columns}
          rowSelection={rowSelection} />
      </Col>
      <Col md={0} xs={24}>
        <List
          dataSource={dataSource}
          renderItem={item => (
            <List.Item>
              <DescriptionListComponent
                items={[
                  { label: "Nombre", value: item.name },
                  { label: "Teléfono", value: item.phone },
                  { label: "Rol", value: item.role }
                ]} />
            </List.Item>
          )} />
      </Col>
    </>
  )
}

export default UsersTable
