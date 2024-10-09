import React, { useEffect } from "react"
import { Form, Input, DatePicker, Select, InputNumber, Button } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { createEvent } from "@/slices/events-slice"
import axios from "axios"
import dayjs from "dayjs"

const { Option } = Select

const EventForm = ({ eventToEdit, onCancel }) => {
  const { list } = useSelector(state => state.usersSlice)
  const { list: rooms } = useSelector(state => state.roomsSlice)
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  useEffect(() => {
    if (eventToEdit) {
      form.setFieldsValue({
        name: eventToEdit.name,
        guestQuantity: eventToEdit.guestQuantity,
        eventDate: eventToEdit.eventDate ? dayjs(eventToEdit.eventDate) : null,
        eventHall: eventToEdit.eventHall || "hall1",
        userId: eventToEdit.users?.[0]?.name
      })
    }
  }, [eventToEdit, form])

  const handleSubmit = async values => {
    try {
      const eventData = {
        name: values.name,
        guestQuantity: values.guestQuantity,
        eventDate: values.eventDate || new Date().toISOString(),
        eventHallId: values.eventHall,
        userId: values.userId
      }

      const response = eventToEdit
        ? await axios.put(`/api/events/update?id=${eventToEdit.id}`, eventData)
        : await axios.post("/api/events/create", eventData)

      dispatch(createEvent(response.data))
      onCancel()
    } catch (error) {
      console.error("Error al crear o actualizar el evento:", error)
    }
  }

  return (
    <Form
      form={form}
      requiredMark={false}
      layout="vertical"
      autoComplete="off"
      onFinish={handleSubmit}>
      <Form.Item
        name="name"
        label="Nombre del evento"
        rules={[{ required: true, message: "Por favor ingresa el nombre" }]}
        colon={false}>
        <Input placeholder="Nombre del evento" />
      </Form.Item>
      <Form.Item
        name="userId"
        label="Usuarios"
        rules={[{ required: true, message: "Selecciona el anfitrión" }]}
        colon={false}>
        <Select placeholder="Selecciona los usuarios">
          {list.filter(user => user.role === "HOST").map(user => (
            <Option key={user.id} value={user.id}>{user.name}</Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="guestQuantity"
        label="Cantidad de invitados"
        rules={[{ required: true, message: "Ingresa la cantidad de invitados" }]}
        colon={false}>
        <InputNumber placeholder="Número de invitados" style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="eventDate"
        label="Fecha del evento"
        rules={[{ required: true, message: "Selecciona la fecha del evento" }]}
        colon={false}>
        <DatePicker style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="eventHall"
        label="Salón del evento"
        rules={[{ required: true, message: "Selecciona el salón" }]}
        colon={false}>
        <Select placeholder="Selecciona el salón">
          {rooms.map(room => (
            <Option key={room.id} value={room.id}>
              {room.name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="default" onClick={onCancel}>Cancelar</Button>
        <Button
          type="primary" htmlType="submit"
          style={{ marginLeft: "10px" }}>
          {eventToEdit ? "Guardar cambios" : "Crear evento"}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default EventForm
