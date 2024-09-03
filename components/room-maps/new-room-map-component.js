import { Button , Col , Form , Input } from "antd"
import EmptyDescription from "@/components/shared/empty-component"

const NewRoomMapComponent = ({ onSave, onCancel }) => {
  return(
    <Col>
      <Form layout="vertical">
        <Form.Item label="Nombre">
          <Input style={{ width : "700px" }} />
        </Form.Item>
        <Form.Item label="Selecciona los elementos y arrastralos">
          <Col span={16}>
            <Button style={{ marginRight: "4px" }}>Circulo</Button>
            <Button style={{ marginRight: "4px" }}>Cuadrado</Button>
            <Button style={{ marginRight: "4px" }}>Area</Button>
          </Col>
        </Form.Item>
        <Form.Item>
          <EmptyDescription description="Arrastra las mesas y áreas aqui  " />
        </Form.Item>
        <div style={{ display : "flex" , justifyContent : "flex-end" }}>
          <Button onClick={onCancel} style={{ marginRight : "8px" }}>
            Cancelar
          </Button>
          <Button
            style={{
              backgroundColor: "#17202a",
              color: "#ffffff"
            }}
            onClick={onSave}>
            Guardar
          </Button>

        </div>
      </Form>
    </Col>

  )
}

export default NewRoomMapComponent