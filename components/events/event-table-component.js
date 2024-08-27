import React, { useState } from "react"
import { Table } from "antd"
import { useEvent } from "./event-context"
import TableActions from "./event-table-actions-component"
import EventHeader from "./event-header-component"
import { columns, initialDataSource } from "./event-table-items"
import EmptyDescription from "./event-empty-component"
import EventCard from "./event-card-component"

const EventTable = () => {
  const [dataSource, setDataSource] = useState(initialDataSource)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { selectedEvent, eventData } = useEvent()

  const onSelectChange = newSelectedRowKeys => {
    setSelectedRowKeys(newSelectedRowKeys)
  }

  if (!eventData || eventData.length === 0) {
    return (
      <EmptyDescription
        description="No hay eventos, favor de comunicarse con administración." />
    )
  }

  return (
    <div className="event-container">
      <EventHeader selectedEvent={selectedEvent} showFullView={true} />
      {selectedEvent ? (
        <>
          <TableActions
            dataSource={dataSource}
            selectedRowKeys={selectedRowKeys}
            setDataSource={setDataSource}
            setSelectedRowKeys={setSelectedRowKeys}
            showFullView={true} />
          <Table
            size="small"
            bordered
            rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
            columns={columns}
            dataSource={dataSource} />
          <EventCard />
        </>
      ) : (
        <div>
          <EmptyDescription
            description="Seleccione un evento para ver aquí sus detalles" />
          <EventCard />
        </div>
      )}
    </div>
  )
}

export default EventTable