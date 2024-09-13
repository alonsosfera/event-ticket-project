import { useEvent } from "../../events/event-context"
import TableActions from "./event-table-actions-component"
import { List, Typography, Button } from "antd"
import EmptyDescription from "../../shared/empty-component"
import EventCard from "@/components/events/event-card-component"
import { LeftOutlined } from "@ant-design/icons"
import DescriptionListComponent from "@/components/shared/description-list-component"

const { Title, Text } = Typography

const dataSource = Array.from({ length: 46 }).map((_, i) => ({
  key: i,
  familia: `Edwa King ${i}`,
  invitados: 32,
  whatsapp: `6394650090 ${i}`,
  estatus: "pendiente"
}))

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
    <div className="event-container">
      {selectedEvent && (
      <Button
        type="text"
        className="back-button"
        icon={<LeftOutlined className="icon-back" />}
        onClick={handleBack}>
      </Button>
      )}
      {selectedEvent ? (
        <>
          <TableActions />
          <List
            dataSource={dataSource}
            renderItem={item => (
              <List.Item>
                <DescriptionListComponent items={[
                  { label: <Text strong>Familia</Text>, value: item.familia },
                  { label: <Text strong>Invitados</Text>, value: item.invitados },
                  { label: <Text strong>WhatsApp</Text>, value: item.whatsapp },
                  { label: <Text strong>Estatus</Text>, value: item.estatus }
                ]} />
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
