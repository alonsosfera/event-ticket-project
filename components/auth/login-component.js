import Image from "next/image"
import { useRouter } from "next/router"
import { signIn } from "next-auth/react"
import { useEffect, useState } from "react"
import { Row, Col, Form, Input, Button, message } from "antd"
import { WhatsAppOutlined, LockOutlined } from "@ant-design/icons"

import Recovery from "./password-recovery-component"
import NewPasswordComponent from "@/components/auth/new-password-component"

export default function LoginComponent() {
  const router = useRouter()
  const [recoveryId, setRecoveryId] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isRecoveryModalVisible, setIsRecoveryModalVisible] = useState(false)

  const showRecoveryModal = () => setIsRecoveryModalVisible(true)
  const closeRecoveryModal = () => setIsRecoveryModalVisible(false)

  const onFinish = credentials => {
    setIsLoading(true)
    signIn("credentials", { ...credentials, callbackUrl: "/" })
      .catch(error => {
        message.error("Número de teléfono o contraseña incorrectos")
        console.error(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    const { phone, pass } = router.query

    if (phone && pass) {
      router.replace("/auth/signin")
        .then(() => onFinish({ phone, password: pass }))
    }

    const { error } = router.query
    if (error && error === "invalid_credentials") {
      message.error("Credenciales inválidas")
    } else if (error && error === "server_error") {
      message.error("Hubo un error")
    }

    if (router.query.recovery) {
      setRecoveryId(router.query.recovery)
      router.replace("")
    }
  }, [router])

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
            onFinish={onFinish}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}>
            <Form.Item
              name="phone"
              colon={false}
              label="Número de teléfono"
              rules={[
                { required: true, message: "Por favor ingresa tu número de teléfono" },
                { pattern: /^\d{10}$/, message: "El número de teléfono debe tener exactamente 10 dígitos" }
              ]}>
              <Input
                prefix={<WhatsAppOutlined />}
                placeholder="WhatsApp"
                type="text" />
            </Form.Item>
            <Form.Item
              colon={false}
              name="password"
              label="Contraseña"
              rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}>
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
                type="primary"
                htmlType="submit"
                className="button"
                loading={isLoading}>
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
        onCancel={closeRecoveryModal} />

      <NewPasswordComponent
        visible={!!recoveryId}
        recoveryId={recoveryId}
        onClose={() => setRecoveryId(null)} />
    </>
  )
}
