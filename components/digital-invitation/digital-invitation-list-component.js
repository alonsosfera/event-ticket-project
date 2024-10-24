import { Col, Row } from "antd"
import DigitalInvitationListItem from "@/components/digital-invitation/digital-invitation-list-item-component"

const DigitalInvitationListComponent = () => {
  const dataSource = [
    {
      key: "1",
      fileUrl: "https://via.placeholder.com/150",
      fileName: "Conferencia Tecnológica"
    },
    {
      key: "2",
      fileUrl: "https://via.placeholder.com/150",
      fileName: "Reunión de Negocios"
    },
    {
      key: "3",
      fileUrl: "https://via.placeholder.com/150",
      fileName: "Fiesta Anual"
    },
    {
      key: "4",
      fileUrl: "https://via.placeholder.com/150",
      fileName: "Seminario de Marketing"
    }
  ]

  return (
    <Row gutter={[24, 12]}>
      {dataSource.map(item => (
        <Col key={item.key} span={6}>
          <DigitalInvitationListItem item={item} />
        </Col>
      ))}
    </Row>
  )
}

export default DigitalInvitationListComponent