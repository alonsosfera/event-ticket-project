import { Modal } from "antd"
import NewUser from "@/components/user/new-user-component"

const NewUserModal = ({ isModalVisible, handleCancel }) => (
  <Modal
    title="Nuevo Usuario"
    open={isModalVisible}
    onCancel={handleCancel}
    cancelText="Cancelar"
    okText="Guardar"
    width={381}>
    <NewUser />
  </Modal>
)

export default NewUserModal
