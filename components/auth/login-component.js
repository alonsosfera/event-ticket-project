import { Row, Col, Form, Input, Button } from "antd"
import Link from "next/link"
import Image from "next/image"
import { WhatsAppOutlined, LockOutlined } from "@ant-design/icons"

export default function LoginComponent() {

  const onFinish = values => {
    console.log("Datos ingresados:", values)
  }

  const onFinishFailed = errorInfo => {
    console.log("Error:", errorInfo)
  }

  return (
    <Row
      className="login"
      justify={"center"}
      align="middle">
      <Col span={12}>
        <div className="logo">
          <Image
            src="/PartyPass logo.webp"
            alt="logo"
            fill={true}
            className="title" />
        </div>
        <Form
          className="form"
          requiredMark={false}
          name="loginForm"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}>
          <Form.Item
            name="tel"
            label="Número de Teléfono"
            rules={[
              { required: true, message: "Por favor ingresa tu número de teléfono" },
              { pattern: /^\d{10}$/, message: "El número de teléfono debe tener exactamente 10 dígitos" }
            ]}
            colon={false}>
            <Input
              prefix={<WhatsAppOutlined />}
              placeholder="Número de teléfono"
              type="number" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
            colon={false}>
            <Input.Password
              placeholder="Contraseña"
              prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item className="link">
            <Link style={{ color: "#000000" }} href="https://www.figma.com/design/fnuzq9KkkLzHpqMQwOtrLd/App?node-id=428-982&t=rNOSGRWrMaIrPb22-0">
              ¿Olvidaste tu contraseña?
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              className="button"
              htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Col>

      <Col span={12} className={"column-triangles"}>
        <div className={"black-triangle"}></div>
        <div className={"yellow-triangle"}></div>
        <div className={"green-triangle"}></div>
      </Col>
    </Row>
  )
};


