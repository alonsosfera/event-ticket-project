import { Col, Modal, Row, Typography, Grid } from "antd"
import EmptyDescription from "@/components/shared/empty-component"

const ConfigRoomMaps = ({ isArrangeGuestsModalVisible, handleCancelArrangeGuestsModal }) => {
  const { Text } = Typography
  const screens = Grid.useBreakpoint()

  const guests = [
    { name: "Invitado 1", table: "Mesa 1" },
    { name: "Invitado 2", table: "Mesa 2" },
    { name: "Invitado 3", table: "Mesa 3" },
    { name: "Invitado 4", table: "Mesa 4" },
    { name: "Invitado 5", table: "Mesa 5" },
    { name: "Invitado 6", table: "Mesa 6" },
    { name: "Invitado 7", table: "Mesa 1" },
    { name: "Invitado 8", table: "Mesa 2" }
  ]

  return (
    <Modal
      title="Acomodo de invitados"
      open={isArrangeGuestsModalVisible}
      centered
      onCancel={handleCancelArrangeGuestsModal}
      width={870}
      cancelText={"Cancelar"}
      okText={"Guardar acomodo"}>
      <Row gutter={[16, 16]}>
        <Col
          md={14} xs={24}
          order={screens.xs ? 1 : 2}>
          <EmptyDescription />
        </Col>
        <Col
          md={10} xs={24}
          order={screens.xs ? 2 : 1}>
          <Text type="secondary">
            Selecciona y arrastra a una familia para acomodarlos por mesa
          </Text>
          <Row gutter={[20, 5]} style={{ marginTop: "10px" }}>
            {guests.map((guest, index) => (
              <Col
                key={index}
                xs={24}
                md={10}
                style={{
                  border: "1px dashed #ccc",
                  padding: "5px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: "5px"
                }}>
                <Text>{guest.name}</Text>
                <Text>{guest.table}</Text>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

export default ConfigRoomMaps
