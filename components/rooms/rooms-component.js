import { Row, Col, message } from "antd"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import RoomsHeaderComponent from "./rooms-header-component"
import RoomsSearchComponent from "./rooms-search-component"
import RoomsTableComponent from "./rooms-table-component"
import NewRoomModalComponent from "./new-room-component"
import { deleteRoom } from "@/slices/rooms-slice"

const Rooms = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleDelete = async id => {
    try {
      const response = await axios.delete("/api/event-halls/delete", {
        params: { id }
      })

      if (response.status === 200) {
        message.open({
          content: "Salón eliminado con éxito",
          duration: 3
        })
        dispatch(deleteRoom(id))
      } else {
        message.error("Hubo un error al borrar el salón")
      }
    } catch (error) {
      console.error("Error:", error)
      message.error("Hubo un error al borrar el salón")
    }
  }

  const rooms = useSelector(state => state.roomsSlice.list)

  return (
    <>
      <Row className="rooms-container" gutter={[24, 0]}>
        <Col span={24}>
          <RoomsHeaderComponent showModal={showModal} />
        </Col>

        <Col span={24}>
          <RoomsSearchComponent />
        </Col>
        <Col span={24}>
          <RoomsTableComponent
            rooms={rooms}
            handleDelete={handleDelete} />
        </Col>
      </Row>

      <NewRoomModalComponent
        isModalVisible={isModalVisible}
        handleCancel={handleCancel} />
    </>
  )
}

export default Rooms
