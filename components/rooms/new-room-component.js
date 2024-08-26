import { Form, Input } from "antd"
import Dragger from "antd/es/upload/Dragger"
import { InboxOutlined } from "@ant-design/icons"
import { useState } from "react"

const NewRoom = ({  onSubmit }) => {
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "File.png",
      status: "done",
      url: "https://www.google.com"
    }
  ])

  const handleChange = info => {
    let newFileList = [...info.fileList]
    newFileList = newFileList.slice(-2) // Limitar a 2 archivos recientes
    newFileList = newFileList.map(file => {
      if (file.response) {
        file.url = file.response.url
      }
      return file
    })
    setFileList(newFileList)
  }

  const uploadProps = {
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange: handleChange,
    multiple: true,
    fileList
  }

  return (
    <Form
      layout="vertical"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onSubmit}>

      <Form.Item
        label="Nombre"
        name="name"
        rules={[{ message: "Por favor introduce nombre!" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Dirección"
        name="addres"
        rules={[{ message: "Por favor confirma la dirección" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Capacidad"
        name="capacity"
        rules={[{ message: "Por favor confirma la capacidad del salón" }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Sube tus archivos">
        <Dragger {...uploadProps}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ color: "#2F333C" }} />
          </p>
          <p className="ant-upload-text">Haz clic o arrastra aquí tu archivo</p>
        </Dragger>
      </Form.Item>
    </Form>
  )
}

export default NewRoom
