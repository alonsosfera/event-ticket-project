import Typography from "antd/es/typography/Typography"
import ButtonsHome from "./owner-home-buttons-component"
import EventCard from "../events/event-card-component"
import { Col } from "antd"
import { useDispatch , useSelector } from "react-redux"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
import { fetchEventsList , setEventsError , setEventsList } from "@/slices/events-slice"
import axios from "axios"

dayjs.extend(isBetween)

const { Title } = Typography

const OwnerHomeComponent = () => {
  const { list } = useSelector(state => state.eventsSlice)
  const events = useSelector(state => state.eventsSlice.list)
  const dispatch = useDispatch()

  if (!events.length) {
    dispatch(fetchEventsList())
    axios.get("/api/events/list")
      .then(({ data }) => {
        dispatch(setEventsList(data))
      })
      .catch(error => {
        dispatch(setEventsError(error.message))
      })}

  const getEventsThisWeek = list => {
    const startOfWeek = dayjs().startOf("week")
    const endOfWeek = dayjs().endOf("week")

    return list.filter(event =>
      dayjs(event.eventDate).isBetween(startOfWeek, endOfWeek, null, "[]")
    )
  }

  const getUpcomingEvents = list => {
    const endOfWeek = dayjs().endOf("week")

    return list.filter(event => dayjs(event.eventDate).isAfter(endOfWeek))
  }

  const eventsThisWeek = getEventsThisWeek(list)
  const upcomingEvents = getUpcomingEvents(list)

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
      <EventCard
        events={eventsThisWeek} clickable={false}
        cursor="default" />
      <Col>
        <Title level={5} style={{ fontWeight: "bold", marginBottom: "20px", marginTop: "20px" }}>Próximos eventos</Title>
      </Col>
      <EventCard events={upcomingEvents} />
    </>
  )
}

export default OwnerHomeComponent