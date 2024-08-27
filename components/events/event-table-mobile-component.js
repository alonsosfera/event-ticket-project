import EventHeader from "./event-header-component"
import { useEvent } from "./event-context"
import TableActions from "./event-table-actions-component"
import { List, Descriptions, Typography, Button } from "antd"
import EmptyDescription from "./event-empty-component"
import EventCard from "./event-card-component"
import { LeftOutlined } from "@ant-design/icons"

const { Title } = Typography

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  familia: `Edwa King ${i}`,
  invitados: 32,
  whatsapp: `6394650090 ${i}`,
  estatus: "pendiente"
}))

const DescriptionView = ({ data }) => (
  <Descriptions
    bordered column={1}>
    <Descriptions.Item label="Familia">{data.familia}</Descriptions.Item>
    <Descriptions.Item label="Invitados">{data.invitados}</Descriptions.Item>
    <Descriptions.Item label="WhatsApp">{data.whatsapp}</Descriptions.Item>
    <Descriptions.Item label="Estatus">{data.estatus}</Descriptions.Item>
  </Descriptions>
)

const TableMobile = () => {
  const { selectedEvent, eventData } = useEvent()

  const handleBack = () => {
    window.location.reload()
  }

  if (!eventData || eventData.length === 0) {
    return (
      <EmptyDescription
        description="No hay eventos, favor de comunicarse con administración." />
    )
  }

  return (
    <div className="event-container-mobile">
      {selectedEvent && (
      <Button
        type="text"
        className="back-button"
        icon={<LeftOutlined className="icon-back" />}
        onClick={handleBack}>
      </Button>
      )}
      <EventHeader selectedEvent={selectedEvent} />
      {selectedEvent ? (
        <>
          <TableActions showFullView={false} />
          <List
            dataSource={dataSource}
            renderItem={item => (
              <List.Item>
                <DescriptionView data={item} />
              </List.Item>
            )} />
        </>
      ) : (
        <div>
          <Title className="title-event">Eventos</Title>
          <EventCard />
        </div>
      )}
    </div>
  )
}

export default TableMobile