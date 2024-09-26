import Typography from "antd/es/typography/Typography"
import ButtonsHome from "./owner-home-buttons-component"
import EventCard from "../events/event-card-component"
import { Col } from "antd"
import { useSelector } from "react-redux"
const { Title } = Typography

const OwnerHomeComponent = () => {

  const { list } = useSelector(state => state.eventsSlice)

  return (
    <>
      <Col>
        <Title className="page-title">Home</Title>
      </Col>
      <Col xs={0} sm={24}>
        <Title level={5} style={{ fontWeight: "bold" }}>Enlaces rápidos</Title>
      </Col>
      <ButtonsHome />
      <Col>
        <Title level={5} style={{ fontWeight: "bold", marginBottom: "20px" }}>Eventos esta semana</Title>
      </Col>
      <EventCard events={list} />
      <Col>
        <Title level={5} style={{ fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}>Proximos eventos</Title>
      </Col>
      <EventCard />
    </>
  )
}

export default OwnerHomeComponent