import { Button, Modal, Form, Input, Flex, Divider, Typography, message } from "antd"
import axios from "axios"
import { useDispatch } from "react-redux"
import { createRoom, updateRoom } from "@/slices/rooms-slice"
import { useEffect } from "react"

const { Title } = Typography

const NewRoomModalComponent = ({ isModalVisible, handleCancel, roomData }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onSubmit = async values => {
    try {
      let response

      if (roomData && roomData.id) {
        response = await axios.put(`/api/event-halls/update?id=${roomData.id}`, {
          name: values.roomName,
          locationUrl: values.locationUrl
        })

        if (response.status === 200) {
          message.open({
            content: "Salón actualizado exitosamente",
            duration: 3
          })

          dispatch(updateRoom(response.data))
        }
      } else {
        response = await axios.post("/api/event-halls/create", {
          name: values.roomName,
          locationUrl: values.locationUrl
        })

        if (response.status === 201) {
          message.open({
            content: "Salón creado exitosamente",
            duration: 3
          })
          dispatch(createRoom(response.data.eventHall))
        }
      }

      form.resetFields()
      handleCancel()
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al crear/actualizar el salón, intenta nuevamente o consulta con administrativo."
      message.error(errorMessage)
    }
  }

  useEffect(() => {
    if (roomData) {
      form.setFieldsValue({
        roomName: roomData.name,
        locationUrl: roomData.locationUrl
      })
    }
  }, [roomData, form])

  return (
    <Modal
      open={isModalVisible}
      centered
      onCancel={handleCancel}
      footer={null}
      width={383}>
      <Title level={3}>{roomData ? "Editar salón" : "Nuevo salón"}</Title>
      <Divider style={{ background: "black", margin: "0px 0px 20px 0px" }} />
      <Form
        form={form}
        requiredMark={false}
        layout="vertical"
        autoComplete="off"
        onFinish={onSubmit}>
        <Form.Item
          name="roomName"
          label="Nombre"
          rules={[{ required: true, message: "Por favor ingresa el nombre del salón" }]}>
          <Input placeholder="Salón campestre" />
        </Form.Item>
        <Form.Item
          name="locationUrl"
          label="Dirección"
          rules={[{ required: true, message: "Por favor ingresa la Dirección" }]}>
          <Input placeholder="Avenida 20 sur 201" />
        </Form.Item>
        <Form.Item
          name="capacity"
          label="Capacidad">
          <Input placeholder="Capacidad" />
        </Form.Item>
        <Form.Item>
          <Flex justify="end" gap={10}>
            <Button type="default" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button type="primary" htmlType="submit">
              {roomData ? "Actualizar salón" : "Crear salón"}
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewRoomModalComponent
