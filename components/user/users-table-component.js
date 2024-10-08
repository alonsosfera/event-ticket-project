import { Button, Col, List, Space, Spin, Table, Modal, message } from "antd"
import { LoadingOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons"
import DescriptionListComponent from "@/components/shared/description-list-component"
import axios from "axios"
import { useDispatch } from "react-redux"
import { deleteUser } from "@/slices/users-slice"

const UsersTable = ({ dataSource, isLoading }) => {
  const dispatch = useDispatch()

  const showConfirm = id => {
    Modal.confirm({
      title: "¿Estás seguro de que quieres eliminar este usuario?",
      onOk: () => handleDelete(id),
      okText: "Eliminar",
      cancelText: "Cancelar"
    })
  }

  const handleDelete = async id => {
    try {
      const response = await axios.delete("/api/users/delete", {
        data: { id }
      })

      if (response.status === 200) {
        message.open({
          content: "Usuario eliminado con éxito",
          duration: 3
        })
        dispatch(deleteUser(id))
      } else {
        message.error("Hubo un error al borrar el usuario")
      }
    } catch (error) {
      console.error("Error:", error)
      message.error("Hubo un error al borrar el usuario")
    }
  }


  const columns = [
    { title: "Nombre", dataIndex: "name", key: "name" },
    { title: "Teléfono", dataIndex: "phone", key: "phone" },
    { title: "Rol", dataIndex: "role", key: "role" },
    {
      title: "Acciones",
      key: "action",
      render: (text, record) => {
        return (
          <Space size="middle">
            <Button shape="circle" icon={<EditOutlined />} />
            <Button
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => showConfirm(record.key)} />
          </Space>
        )
      }
    }
  ]

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
          dataSource={dataSource}
          columns={columns}
          rowKey={record => record.id} />
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
