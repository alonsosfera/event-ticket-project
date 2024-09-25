import React from "react"
import { Button, Modal, Form, Input, DatePicker, Typography, Select, InputNumber } from "antd"
import { useDispatch } from "react-redux"
import { createEvent } from "@/slices/events-slice"
import axios from "axios"

const { Title } = Typography
const { Option } = Select

const EventModal = ({ visible, onCancel }) => {
  const dispatch = useDispatch()

  const handleSubmit = async values => {
    try {
      const eventData = {
        name: values.name,
        guestQuantity: values.guestQuantity,
        eventDate: values.eventDate || new Date().toISOString(),
        eventHallId: values.eventHallId || "3ee77bbc-f7da-4244-9314-6b9c02acb6da",
        userId: values.userId || "63b4a3fb-f101-45ef-827c-cfd0ebc84a91"
      }

      const response = await axios.post("/api/events/create", eventData)

      dispatch(createEvent, response.data)

      onCancel()
    } catch (error) {
      console.error("Error al crear el evento:", error)
    }
  }


  return (
    <Modal
      title={<Title level={3}>Nuevo evento </Title>}
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={500}>
      <Form
        requiredMark={false}
        layout="vertical"
        autoComplete="off"
        onFinish={handleSubmit}>
        <Form.Item
          name="name"
          label="Nombre del evento"
          rules={[{ required: true, message: "Por favor ingresa el nombre del evento" }]}
          colon={false}>
          <Input placeholder="Nombre del evento" />
        </Form.Item>

        <Form.Item
          name="users"
          label="Usuarios"
          rules={[{ required: false, message: "Por favor selecciona los usuarios" }]}
          colon={false}>
          <Input placeholder="Nombre del host" />
        </Form.Item>

        <Form.Item
          name="guestQuantity"
          label="Cantidad de invitados"
          rules={[{ required: true, message: "Por favor ingresa la cantidad de invitados" }]}
          colon={false}>
          <InputNumber placeholder="Número de invitados" style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="eventDate"
          label="Fecha del evento"
          rules={[{ required: true, message: "Por favor selecciona la fecha del evento" }]}
          colon={false}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          name="eventHall"
          label="Salón del evento"
          rules={[{ required: true, message: "Por favor selecciona el salón del evento" }]}
          colon={false}>
          <Select placeholder="Selecciona el salón">
            <Option value="hall1">Salón 1</Option>
            <Option value="hall2">Salón 2</Option>
            <Option value="hall3">Salón 3</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="default" onClick={onCancel}>
            Cancelar
          </Button>
          <Button
            type="primary" htmlType="submit"
            style={{ marginLeft: "10px" }}>
            Crear evento
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EventModal
