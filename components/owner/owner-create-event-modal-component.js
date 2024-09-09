import React from "react"
import { Button, Modal, Form, Input, DatePicker, Flex, Typography, Select, InputNumber } from "antd"

const { Title } = Typography
const { Option } = Select

const EventModal = ({ visible, onCancel, onSubmit }) => {
  const handleSubmit = values => {
    values
    onSubmit()
    onCancel()
  }

  return (
    <Modal
      title={ <Title level={3}>Nuevo evento </Title> }
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
          name="eventName"
          label="Nombre del evento"
          rules={[{ required: true, message: "Por favor ingresa el nombre del evento" }]}
          colon={false}>
          <Input placeholder="Nombre del evento" />
        </Form.Item>
        <Form.Item
          name="host"
          label="Anfitrión"
          rules={[{ required: true, message: "Por favor selecciona el anfitrión" }]}
          colon={false}>
          <Select placeholder="Selecciona un anfitrión">
            <Option value="host1">Anfitrión 1</Option>
            <Option value="host2">Anfitrión 2</Option>
            <Option value="host3">Anfitrión 3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="eventType"
          label="Tipo de evento"
          rules={[{ required: true, message: "Por favor ingresa el tipo de evento" }]}
          colon={false}>
          <Input placeholder="Tipo de evento" />
        </Form.Item>
        <Form.Item
          name="date"
          label="Fecha"
          rules={[{ required: true, message: "Por favor selecciona una fecha" }]}
          colon={false}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="guests"
          label="Invitados"
          rules={[{ required: true, message: "Por favor ingresa el número de invitados" }]}
          colon={false}>
          <InputNumber placeholder="Número de invitados" style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          name="tableArrangement"
          label="Acomodo de mesas"
          rules={[{ required: true, message: "Por favor ingresa el acomodo de mesas" }]}
          colon={false}>
          <Select placeholder="Selecciona un acomodo de mesas">
            <Option value="host1">Acomodo 1</Option>
            <Option value="host2">Acomodo 2</Option>
            <Option value="host3">Acomodo 3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="venue"
          label="Salón"
          rules={[{ required: true, message: "Por favor ingresa el nombre del salón" }]}
          colon={false}>
          <Select placeholder="Selecciona un salón">
            <Option value="host1">Salón 1</Option>
            <Option value="host2">Salón 2</Option>
            <Option value="host3">Salón 3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="passDesign"
          label="Diseño de pase"
          rules={[{ required: true, message: "Por favor ingresa el diseño de pase" }]}
          colon={false}>
          <Select placeholder="Selecciona un pase">
            <Option value="host1">Pase 1</Option>
            <Option value="host2">Pase 2</Option>
            <Option value="host3">Pase 3</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Flex justify="end" gap={10}>
            <Button type="default" onClick={onCancel}>
              Cancelar
            </Button>
            <Button htmlType="submit">
              Crear evento
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default EventModal
