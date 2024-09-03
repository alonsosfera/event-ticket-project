import { Empty, Flex } from "antd"

const EmptyDescription = ({ description, image }) => (
  <Flex
    justify="center" align="center"
    style={{ height: "70vh" }}>
    <Empty
      image={image || Empty.PRESENTED_IMAGE_SIMPLE}
      description={description || "No hay datos disponibles."} />
  </Flex>
)

export default EmptyDescription