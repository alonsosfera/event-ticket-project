import { Table, Space, Button } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import TableActions from "./event-table-actions-component"
import EventCard from "@/components/events/event-card-component"
import EmptyDescription from "../../shared/empty-component"
import InvitateGuestModal from "./event-modal-invitations"

const EventTableView = ({
  userEvents,
  selectedEvent,
  selectedRowKeys,
  setSelectedRowKeys,
  guests,
  isLoadingGuests,
  selectedGuest,
  isInvitateGuestModalVisible,
  handleEdit,
  handleCancelModal,
  handleSubmitEdit,
  initialValues,
  columns,
  showDeleteConfirm,
  onSelectChange
}) => {

  if (!userEvents || userEvents.length === 0) {
    return (
      <EmptyDescription description="No hay eventos, favor de comunicarse con administración." />
    )
  }

  const mapGuests = guests => {
    return guests.map(guest => ({
      id: guest.id,
      name: guest.name,
      quantity: guest.guestQuantity,
      phone: guest.phone,
      estatus: "pendiente"
    }))
  }

  const columnsWithActions = columns.map(column => {
    if (column.title === "Acciones") {
      return {
        ...column,
        render: (_, record) => (
          <Space>
            <Button
              icon={<EditOutlined />}
              shape="circle"
              onClick={() => handleEdit(record)} />
            <Button
              icon={<DeleteOutlined />}
              shape="circle"
              onClick={() => showDeleteConfirm(record.id)} />
          </Space>
        )
      }
    }
    return column
  })

  return (
    <div className="event-container">
      {selectedEvent ? (
        <>
          <TableActions
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys} />
          <Table
            size="small"
            bordered
            rowSelection={{ selectedRowKeys, onChange: onSelectChange }}
            columns={columnsWithActions}
            dataSource={mapGuests(guests)}
            loading={isLoadingGuests} />
          <EventCard
            events={userEvents}
            clickable={true} />
          <InvitateGuestModal
            visible={isInvitateGuestModalVisible}
            onCancel={handleCancelModal}
            onSubmit={handleSubmitEdit}
            initialValues={initialValues}
            isEditMode={!!selectedGuest} />
        </>
      ) : (
        <div>
          <EmptyDescription description="Seleccione un evento para ver aquí sus detalles" />
          <EventCard
            events={userEvents}
            clickable={true} />
        </div>
      )}
    </div>
  )
}

export default EventTableView
