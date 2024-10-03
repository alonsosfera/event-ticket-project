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
      width: 40,
      render: () => <Checkbox />
    },
    {
      title: "Salón",
      dataIndex: "name",
      key: "room",
      ellipsis: true,
      width: 150
    },
    {
      title: "Capacidad",
      dataIndex: "capacity",
      key: "capacity",
      width: 100,
      render: text => text || "No disponible"
    },
    {
      title: "Dirección",
      dataIndex: "locationUrl",
      key: "address",
      render: text => (
        <a
          href={text} target="_blank"
          rel="noopener noreferrer">
          {text}
        </a>
      ),
      ellipsis: true,
      width: 150
    },
    {
      title: "Acciones",
      key: "action",
      width: 100,
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
