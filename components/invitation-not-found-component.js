import { Col, Row, Image, Typography } from "antd"

const { Title, Text } = Typography

const InvitationNotFound = () => {
  return (
    <div className="invitation-not-found">
      <Row>
        <Col span={24} className="top-circle"></Col>
      </Row>
      <Row className="content-row">
        <Col
          xs={24} md={12}
          className="image-col">
          <Image
            src="/not_found.webp"
            alt="not found"
            className="not-found-image" />
        </Col>
        <Col
          xs={24} md={12}
          className="text-col">
          <Title className="oops-title">Oops!</Title>
          <Title className="sub-title">Estamos teniendo problemas para encontrar tu invitación</Title>
          <Text className="info-text">Parece que tu información es incorrecta o ya caducó. Si crees que esto es un error, por favor contacta a tu anfitrión.</Text>
        </Col>
      </Row>
      <Row>
        <Col span={24} className="logo-col">
          <Image
            src="/PartyPass logo.webp"
            alt="PartyPass logo"
            width={139}
            height={38}
            className="party-logo" />
        </Col>
      </Row>
      <Row>
        <Col span={24} className="bottom-circle"></Col>
      </Row>
    </div>
  )
}

export default InvitationNotFound
