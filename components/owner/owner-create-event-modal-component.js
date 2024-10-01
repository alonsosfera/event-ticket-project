import React , { useEffect } from "react"
import { Button, Modal, Form, Input, DatePicker, Typography, Select, InputNumber } from "antd"
import { useDispatch , useSelector } from "react-redux"
import { createEvent } from "@/slices/events-slice"
import axios from "axios"
import dayjs from "dayjs"

const { Title } = Typography
const { Option } = Select

const EventModal = ({ visible, onCancel, eventToEdit }) => {

  const { list } = useSelector(state => state.usersSlice)
  const [form] = Form.useForm()

  const dispatch = useDispatch()

  useEffect(() => {
    if (visible && eventToEdit) {
      form.setFieldsValue({
        name: eventToEdit.name,
        guestQuantity: eventToEdit.guestQuantity,
        eventDate: eventToEdit.eventDate ? dayjs(eventToEdit.eventDate) : null,
        eventHallId: eventToEdit.eventHall,
        userId: eventToEdit.users?.[0]?.name
      })
    } else if (!visible) {
      form.resetFields()
    }
  }, [eventToEdit, form, visible])

  const handleSubmit = async values => {
    try {
      const eventData = {
        name: values.name,
        guestQuantity: values.guestQuantity,
        eventDate: values.eventDate || new Date().toISOString(),
        eventHallId: values.eventHall,
        userId: values.userId
      }

      let response
      if (eventToEdit) {
        response = await axios.put(`/api/events/update?id=${eventToEdit.id}`, eventData)
      } else {
        response = await axios.post("/api/events/create", eventData)
      }

      dispatch(createEvent(response.data))
      onCancel()
    } catch (error) {
      console.error("Error al crear o actualizar el evento:", error)
    }
  }

  return (
    <Modal
      title={<Title level={3}>{eventToEdit ? "Editar evento" : "Nuevo evento"}</Title>}
      open={visible}
      centered
      onCancel={onCancel}
      footer={null}
      width={500}>
      <Form
        form={form}
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
          name="userId"
          label="Usuarios"
          rules={[{ required: true, message: "Por favor selecciona el anfitrión" }]}
          colon={false}>
          <Select placeholder="Selecciona los usuarios" optionFilterProp="children">
            {list
              .filter(user => user.role === "HOST")
              .map(user => (
                <Option key={user.id} value={user.id}>
                  {user.name}
                </Option>
              ))}
          </Select>
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
            {eventToEdit ? "Guardar cambios" : "Crear evento"}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EventModal