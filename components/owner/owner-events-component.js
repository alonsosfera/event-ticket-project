import EventButtons from "./owner-events-buttons-component"
import OwnerEventTableMobile from "./owner-events-mobile-table-component"
import OwnerEventsTable from "./owner-events-table-component"
import { Col, Row } from "antd"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchEventsList , setEventsError , setEventsList } from "@/slices/events-slice"
import axios from "axios"

const OwnerEventsComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEventsList())
    axios.get("/api/events/list")
      .then(({ data }) => {
        dispatch(setEventsList(data))
      })
      .catch(error => {
        dispatch(setEventsError(error.message))
      })
  }, [dispatch])

  return (
    <>
      <EventButtons />
      <Row>
        <Col xs={0} md={24}><OwnerEventsTable /></Col>
        <Col xs={24} md={0}><OwnerEventTableMobile /></Col>
      </Row>
    </>
  )
}

export default OwnerEventsComponent