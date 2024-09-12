import { List, Typography } from "antd"
import DescriptionListComponent from "../shared/description-list-component"

const { Text } = Typography

const OwnerEventTableMobile = () => {

  const dataSource = Array.from({ length: 46 }).map((_, i) => ({
    key: i,
    evento: `Evento ${i}`,
    fecha: `2024-09-0${i % 10 + 1}`,
    tipoEvento: `Tipo ${i}`,
    invitados: `${i * 10}`,
    acomodo: `Acomodo ${i}`,
    anfitrion: `Anfitrión ${i}`,
    salon: `Salón ${i}`,
    pase: `Pase ${i}`
  }))

  return (
    <div className="description-container">
      <List
        dataSource={dataSource}
        renderItem={item => (
          <List.Item>
            <DescriptionListComponent items={[
            { label: <Text strong>Evento</Text>, value: item.evento },
            { label: <Text strong>Fecha</Text>, value: item.fecha },
            { label: <Text strong>Tipo de evento</Text>, value: item.tipoEvento },
            { label: <Text strong>Invitados</Text>, value: item.invitados },
            { label: <Text strong>Acomodo de mesas</Text>, value: item.acomodo },
            { label: <Text strong>Anfitrión</Text>, value: item.anfitrion },
            { label: <Text strong>Salón</Text>, value: item.salon },
            { label: <Text strong>Pase</Text>, value: item.pase }
          ]} />
          </List.Item>
            )} />
    </div>
  )
}

export default OwnerEventTableMobile
