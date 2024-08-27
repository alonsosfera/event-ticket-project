import EventHeader from "./event-header-component"
import { useEvent } from "./event-context"
import TableActions from "./event-table-actions-component"
import { List, Descriptions, Typography } from "antd"
import EmptyDescription from "./event-empty-component"

const { Title } = Typography

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  familia: `Edwa King ${i}`,
  invitados: 32,
  whatsapp: `6394650090 ${i}`,
  estatus: "pendiente"
}))

const DescriptionView = ({ record }) => (
  <Descriptions
    bordered column={1}>
    <Descriptions.Item label="Familia">{record.familia}</Descriptions.Item>
    <Descriptions.Item label="Invitados">{record.invitados}</Descriptions.Item>
    <Descriptions.Item label="WhatsApp">{record.whatsapp}</Descriptions.Item>
    <Descriptions.Item label="Estatus">{record.estatus}</Descriptions.Item>
  </Descriptions>
)

const TableMobile = () => {
  const { selectedEvent, eventData } = useEvent()

  if (!eventData || eventData.length === 0) {
    return (
      <EmptyDescription
        description="No hay eventos, favor de comunicarse con administración." />
    )
  }


  return (
    <div className="event-container-mobile">
      <EventHeader selectedEvent={selectedEvent} />
      {selectedEvent ? (
        <>
          <TableActions showFullView={false} />
          <List
            dataSource={dataSource}
            renderItem={item => (
              <List.Item>
                <DescriptionView record={item} />
              </List.Item>
            )} />
        </>
      ) : (
        <Title className="title-event">Eventos</Title>
      )}
    </div>
  )
}

export default TableMobile