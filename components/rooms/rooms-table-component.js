import { Space, Button, Checkbox, Table, Modal } from "antd"
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from "@ant-design/icons"

const { confirm } = Modal

const RoomsTableComponent = ({ rooms, handleDelete, handleEdit }) => {

  const showDeleteConfirm = id => {
    confirm({
      title: "¿Estás seguro que deseas eliminar este salón?",
      icon: <ExclamationCircleOutlined />,
      content: "Esta acción no se puede deshacer y eliminará permanentemente el salón.",
      okText: "Sí, eliminar",
      okType: "danger",
      cancelText: "Cancelar",
      onOk() {
        handleDelete(id)
      },
      onCancel() {
      }
    })
  }

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
      title: "Acciones",
      key: "action",
      render: room => (
        <Space size="middle">
          <Button
            shape="circle" icon={<EditOutlined />}
            onClick={() => handleEdit(room)} />
          <Button
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={() => showDeleteConfirm(room.id)} />
        </Space>
      )
    }
  ]

  return (
    <Table
      dataSource={rooms} columns={columns}
      rowKey="id" />
  )
}

export default RoomsTableComponent
