import { Col, Row, Image, Typography } from "antd"

const { Title, Text } = Typography

const InvitationNotFound = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <Row>
        <Col span={24} style={{ position: "absolute", width: "100%", height: "30%", clipPath: "circle(13.7% at 100% 0)", backgroundColor: "#48D598" }}></Col>
      </Row>
      <Row style={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Col
          xs={24} md={12}
          style={{ textAlign: "center" }}>
          <Image
            src="/not_found.webp"
            alt="not found"
            style={{ width: "90%", maxWidth: "900px", height: "auto" }} />
        </Col>
        <Col
          xs={24} md={12}
          style={{ textAlign: "center", padding: "20px" }}>
          <Title style={{ fontSize: 90 }}>Oops!</Title>
          <Title style={{ fontSize: 30 }}>Estamos teniendo problemas para encontrar tu invitación</Title>
          <Text>Parece que tu información es incorrecta o ya caducó. Si crees que esto es un error, por favor contacta a tu anfitrión.</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ position: "absolute", bottom: "20px", right: "60px", display: "flex", justifyContent: "flex-end" }}>
          <Image
            src="/PartyPass logo.webp"
            alt="PartyPass logo"
            width={139}
            height={38}
            style={{ position: "absolute", bottom: 0, right: 0 }} />
        </Col>
      </Row>
      <Row>
        <Col span={24} style={{ position: "absolute", width: "100%", height: "37%", clipPath: "circle(13.7% at 0 100%)", backgroundColor: "#48D598", bottom: 0 }}></Col>
      </Row>
    </div>
  )
}

export default InvitationNotFound
