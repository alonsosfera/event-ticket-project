import { Empty } from "antd"

const EmptyDescription = ({ description, image }) => (
  <Empty
    className="empty-container"
    image={image || Empty.PRESENTED_IMAGE_SIMPLE}
    description={description || "No hay datos disponibles."} />
)

export default EmptyDescription