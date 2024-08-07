import { Button, Card, Form, Input } from "antd"
import { CloseOutlined } from "@ant-design/icons"


const Recovery = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      position: "relative"
    }}>
      <Card
        title={<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span>Recuperación de contraseña</span>
          <Button
            type="text"
            icon={<CloseOutlined />}
            style={{ fontSize: "16px", color: "#566573" }} />
        </div>}
        bordered={true}
        style={{
          width: 380,
          height: 300,
          position: "relative"
        }}
        headStyle={{
          borderBottom: "1px solid black"
        }}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true
          }}
          autoComplete="off">
          <Form.Item
            label="Nueva contraseña"
            name="nueva_contraseña"
            rules={[
              {
                message: "Por favor introduce tu nueva contraseña!"
              }
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirmar contraseña"
            name="confirmar_contraseña"
            rules={[
              {
                message: "Por favor confirma tu contraseña!"
              }
            ]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Button type="default">
                Cancelar
              </Button>
              <Button style={{ backgroundColor: "black", color: "white" }}>
                Enviar
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Recovery
