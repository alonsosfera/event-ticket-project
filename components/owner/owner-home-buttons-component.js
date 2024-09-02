import React from "react"
import { Button, Row, Col } from "antd"
import Link from "next/link"

const ButtonsHome = () => {
  return (
    <div className="buttons-black">
      <Row gutter={[16]}>
        <Col span={8}>
          <Link href="/rooms" passHref>
            <Button
              className="button-black"
              type="primary"
              block>
              Salones
            </Button>
          </Link>
        </Col>
        <Col span={8}>
          <Link href="/events" passHref>
            <Button
              className="button-black"
              type="primary"
              block>
              Eventos
            </Button>
          </Link>
        </Col>
        <Col span={8}>
          <Link href="/users" passHref>
            <Button
              className="button-black"
              type="primary"
              block>
              Usuarios
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  )
}

export default ButtonsHome