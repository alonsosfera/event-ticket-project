import React, { useState } from "react"
import { Table } from "antd"
import { useEvent } from "../../events/event-context"
import TableActions from "./event-table-actions-component"
import { columns, initialDataSource } from "./event-table-items"
import EmptyDescription from "../../shared/empty-component"
import EventCard from "@/components/events/event-card-component"
import { useSelector } from "react-redux"

const EventTable = () => {
  const [dataSource, setDataSource] = useState(initialDataSource)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const { selectedEvent, eventData } = useEvent()
  const { list, isLoading } = useSelector(state => state.eventsSlice)
  console.log (list)

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
      {selectedEvent ? (
        <>
          <TableActions
            dataSource={dataSource}
            selectedRowKeys={selectedRowKeys}
            setDataSource={setDataSource}
            setSelectedRowKeys={setSelectedRowKeys} />
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
          <EventCard  events={list} />
        </div>
      )}
    </div>
  )
}

export default EventTable