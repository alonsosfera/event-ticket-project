import { Row, Col, Form, Input, Button } from "antd"
import Link from "next/link"

export default function LoginComponent() {

  return (
    <Row
      className="login"
      style={{ height: "100vh" }}
      justify={"center"}
      align="middle">
      <Col span={12} style={{ paddingRight: "2rem" }}>
        <div className={"title"}>PartyPass</div>
        <Form
          name="loginForm"
          initialValues={{ remember: true }}
          style={{ maxWidth: "27vw", margin: "0 auto" }}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Por favor ingresa tu correo electrónico" }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            colon={false}>
            <Input placeholder="Correo electrónico" />
          </Form.Item>

          <Form.Item
            name="password"
            label="contraseña"
            rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            colon={false}>
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item style={{ textAlign: "right" }}>
            <Link style={{ color: "#000000" }} href="https://www.figma.com/design/fnuzq9KkkLzHpqMQwOtrLd/App?node-id=428-982&t=rNOSGRWrMaIrPb22-0">
              ¿Olvidaste tu contraseña?
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              className="round"
              type="primary"
              htmlType="submit"
              style={{ width: "100%", backgroundColor: "#2F333C", borderRadius: "20px" }}>
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </Col>

      <Col span={12} className={"column"}>
        <div className={"black-triangle"}></div>
        <div className={"yellow-triangle"}></div>
        <div className={"green-triangle"}></div>

      </Col>
    </Row>
  )
};


