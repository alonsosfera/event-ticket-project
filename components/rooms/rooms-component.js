import { Row, Col, message } from "antd"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import RoomsHeaderComponent from "./rooms-header-component"
import RoomsSearchComponent from "./rooms-search-component"
import RoomsTableComponent from "./rooms-table-component"
import NewRoomModalComponent from "./new-room-component"
import { deleteRoom } from "@/slices/rooms-slice"
import LoadingComponent from "../shared/loading-component"

const Rooms = () => {
  const { isLoading, list: rooms } = useSelector(state => state.roomsSlice)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [roomData, setRoomData] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const dispatch = useDispatch()

  const showModal = () => {
    setRoomData(null)
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setRoomData(null)
  }

  const handleEdit = room => {
    setRoomData(room)
    setIsModalVisible(true)
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
      }
    } catch (error) {
      if (error.response?.data?.message === "El salón ya tiene eventos asignados") {
        message.error("No se puede eliminar el salón porque ya tiene eventos asignados", 3)
      } else {
        message.error("Hubo un error al intentar borrar el salón", 3)
      }

      console.error("Error:", error)
    }
  }

  // Filtrar los salones según el término de búsqueda
  const filteredRooms = rooms.filter(room =>
    room.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <>
      <Row className="rooms-container" gutter={[24, 0]}>
        <Col span={24}>
          <RoomsHeaderComponent onShowModal={showModal} />
        </Col>

        <Col span={24}>
          <RoomsSearchComponent onSearch={setSearchTerm} />
        </Col>


        {isLoading ? (
          <LoadingComponent />
        ) : (
          <Col span={24}>
            <RoomsTableComponent
              rooms={filteredRooms}
              handleDelete={handleDelete}
              handleEdit={handleEdit} />
          </Col>
        )}
      </Row>

      <NewRoomModalComponent
        isModalVisible={isModalVisible}
        handleCancel={handleCancel}
        roomData={roomData} />
    </>
  )
}

export default Rooms
