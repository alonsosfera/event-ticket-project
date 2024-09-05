import { Col, Row, Image, Typography } from "antd"

const { Title, Text } = Typography

const InvitationNotFound = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Row>
        <Col span={24} style={{ position: "absolute", width: "100%", height: "30%", clipPath: "circle(13.7% at 100% 0)", backgroundColor: "#48D598" }}></Col>
      </Row>
      <Row style={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1 }}>
        <Col
          xs={24} md={12}
          style={{ textAlign: "center" }}>
          <Image
            src="/not_found.webp"
            alt="not found"
            width={300}
            height={200} />
        </Col>
        <Col
          xs={24} md={12}
          style={{ textAlign: "center", padding: "20px" }}>
          <Title style={{ fontSize: 60 }}>Oops!</Title>
          <Title style={{ fontSize: 24 }}>Estamos teniendo problemas para encontrar tu invitación</Title>
          <Text>Parece que tu información es incorrecta o ya caducó. Si crees que esto es un error, por favor contacta a tu anfitrión.</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ position: "absolute", width: "100%", height: "37%", clipPath: "circle(13.7% at 0 100%)", backgroundColor: "#48D598", bottom: 0 }}></Col>
      </Row>
    </div>
  )
}

export default InvitationNotFound
