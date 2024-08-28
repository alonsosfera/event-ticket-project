import React from "react"
import { Button, Row, Col } from "antd"

const ButtonsHome = () => {
  return (
    <div className="buttons-black">
      <Row gutter={[16]}>
        <Col span={8}>
          <Button
            className="button-black"
            type="primary"
            block>
            Salones
          </Button>
        </Col>
        <Col span={8}>
          <Button
            className="button-black"
            type="primary"
            block>
            Eventos
          </Button>
        </Col>
        <Col span={8}>
          <Button
            className="button-black"
            type="primary"
            block>
            Usuarios
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default ButtonsHome