import Typography from "antd/es/typography/Typography"
import ButtonsHome from "./owner-home-buttons-component"
import EventCard from "../events/event-card-component"
const { Title } = Typography

const OwnerHomeComponent = () => {

  return (
    <>
      <div>
        <Title className="page-title">Home</Title>
      </div>
      <div>
        <Title level={5} style={{ fontWeight: "bold" }}>Enlaces rápidos</Title>
      </div>
      <ButtonsHome />
      <div>
        <Title level={5} style={{ fontWeight: "bold", marginBottom: "20px" }}>Eventos esta semana</Title>
      </div>
      <EventCard />
      <div>
        <Title level={5} style={{ fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}>Proximos eventos</Title>
      </div>
      <EventCard />
    </>
  )
}

export default OwnerHomeComponent