import { Col , Form , Input } from "antd"


const NewRoomMapComponent = props => {
  return(
    <Col>
      <Form layout="vertical">
        <Form.Item label="Input 1">
          <Input placeholder="Ingrese algo" />
        </Form.Item>
        <Form.Item label="Input 2">
          <Input placeholder="Ingrese algo" />
        </Form.Item>
      </Form>
    </Col>

  )
}

export default NewRoomMapComponent