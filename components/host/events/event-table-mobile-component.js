import { useEvent } from "../../events/event-context"
import TableActions from "./event-table-actions-component"
import { List, Typography, Button } from "antd"
import EmptyDescription from "../../shared/empty-component"
import EventCard from "@/components/events/event-card-component"
import { LeftOutlined } from "@ant-design/icons"
import DescriptionListComponent from "@/components/shared/description-list-component"

const { Title } = Typography

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
    <div className="event-container-mobile">
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
                  { label: "Familia", value: item.familia },
                  { label: "Invitados", value: item.invitados },
                  { label: "WhatsApp", value: item.whatsapp },
                  { label: "Estatus", value: item.estatus }
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
