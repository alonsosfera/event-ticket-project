import { Button, Modal, Form, Input, Flex, Divider, Typography, message } from "antd"
import axios from "axios"
import { useDispatch } from "react-redux"
import { createRoom } from "@/slices/rooms-slice"

const { Title } = Typography

const NewRoomModalComponent = ({ isModalVisible, handleCancel }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()

  const onSubmit = async values => {
    try {
      const response = await axios.post("/api/event-halls/create", {
        name: values.roomName,
        locationUrl: values.locationUrl
      })

      if (response.status === 201) {
        message.open({
          content: "Salón creado exitosamente",
          duration: 3
        })

        dispatch(createRoom(response.data.eventHall))

        form.resetFields()
        handleCancel()
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error al crear el salón, intenta nuevamente."
      message.error(errorMessage)
      console.error("Error al crear el salón:", error)
    }
  }

  return (
    <Modal
      open={isModalVisible}
      centered
      onCancel={handleCancel}
      footer={null}
      width={383}>
      <Title level={3}>Nuevo salón</Title>
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
          rules={[{ required: true, message: "Por favor ingresa el nombre del salón" }]}
          colon={false}>
          <Input placeholder="Salón campestre" />
        </Form.Item>
        <Form.Item
          name="locationUrl"
          label="Dirección"
          rules={[{ required: true, message: "Por favor ingresa la Dirección" }]}
          colon={false}>
          <Input placeholder="Avenida 20 sur 201" />
        </Form.Item>
        <Form.Item
          name="capacity"
          label="Capacidad"
          // rules={[{ required: true, message: "Por favor ingresa la Dirección" }]}
          colon={false}>
          <Input placeholder="Avenida 20 sur 201" />
        </Form.Item>
        <Form.Item>
          <Flex justify="end" gap={10}>
            <Button type="default" onClick={handleCancel}>
              Cancelar
            </Button>
            <Button type="primary" htmlType="submit">
              Crear salón
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default NewRoomModalComponent
