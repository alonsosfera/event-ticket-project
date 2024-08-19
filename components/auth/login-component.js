import { Row, Col, Form, Input, Button, message } from "antd"
import { useState } from "react"
import Image from "next/image"
import { WhatsAppOutlined, LockOutlined } from "@ant-design/icons"
import Recovery from "./password-recovery-component"

export default function LoginComponent() {
  const [isRecoveryModalVisible, setIsRecoveryModalVisible] = useState(false)

  const showRecoveryModal = () => setIsRecoveryModalVisible(true)
  const handleCancel = () => setIsRecoveryModalVisible(false)

  const onFinish = values => {
    values
  }

  const onFinishFailed = errorInfo => {
    errorInfo
  }

  const handleRecoverySubmit = () => {
    message.success({
      content: "Se ha enviado un mensaje al número proporcionado",
      icon: null,
      duration: 3
    })
  }

  return (
    <>
      <Row
        className="login"
        justify={"center"}
        align="middle">
        <Col xs={20} md={12}>
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
              label="Número de teléfono"
              rules={[
                { required: true, message: "Por favor ingresa tu número de teléfono" },
                { pattern: /^\d{10}$/, message: "El número de teléfono debe tener exactamente 10 dígitos" }
              ]}
              colon={false}>
              <Input
                prefix={<WhatsAppOutlined />}
                placeholder="WhatsApp"
                type="text" />
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

            <Form.Item className="item-password">
              <Button
                type="link"
                onClick={showRecoveryModal}
                className="button-password">
                ¿Olvidaste tu contraseña?
              </Button>
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

        <Col
          className={"column-triangles"}
          xs={0} md={12}>
          <div className={"black-triangle"}></div>
          <div className={"yellow-triangle"}></div>
          <div className={"green-triangle"}></div>
        </Col>
      </Row>

      <Recovery
        visible={isRecoveryModalVisible}
        onCancel={handleCancel}
        onSubmit={handleRecoverySubmit} />
    </>
  )
}
