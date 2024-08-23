import { Form , Input } from "antd"
import Dragger from "antd/es/upload/Dragger"
import { InboxOutlined } from "@ant-design/icons"


const NewRoom = ({ onCancel, onSubmit }) => {

  return(
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
        rules={[{ message: "Por favor confirma la capacidad del salon" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Capacidad"
        name="capacity"
        rules={[{ message: "Por favor confirma la capacidad del salon" }]}>
        <Dragger>
          <p className="ant-upload-drag-icon">
            <InboxOutlined style={{ color: "#2F333C" }} />
          </p>
          <p className="ant-upload-text">Click o arrastra aqui tu archivo</p>
        </Dragger>
      </Form.Item>
    </Form>
  )
}

export default NewRoom