import { Button , Checkbox , Space } from "antd"
import { DeleteOutlined , EditOutlined } from "@ant-design/icons"

 export const dataSource = [
  {
    key: "1",
    room: "Aduitorio Telmex",
    capacity: "150",
    addres: "Avenida solidaridad 3100, col. El Marques, CUU",
    image: "foto"
  },
  {
    key: "2",
    room: "Manuel Bernardo",
    capacity: "300",
    addres: "Avenida solidaridad 3100, col. El Marques, CUU",
    image: "foto"
  }
]

 export const columns = [
  {
    title: "",
    dataIndex: "checkbox",
    key: "checkbox",
    render: () => <Checkbox />
  },
  {
    title: "Salón",
    dataIndex: "room",
    key: "room"
  },
  {
    title: "Capacidad",
    dataIndex: "capacity",
    key: "capacity"
  },
  {
    title: "Dirección",
    dataIndex: "addres",
    key: "addres"
  },
  {
    title: "Imágenes",
    dataIndex: "image",
    key: "image"
  },
  {
    title: "Acciones",
    key: "action",
    render: () => (
      <Space size="middle">
        <Button shape="circle" icon={<EditOutlined />} />
        <Button
          shape="circle" icon={<DeleteOutlined />} />
      </Space>
    )
  }
]