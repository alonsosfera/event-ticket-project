import { Descriptions } from "antd"

const DescriptionListComponent = ({ items }) => (
  <Descriptions bordered column={1}>
    {items.map(item => <Descriptions.Item key={item.label} label={item.label}>{item.value}</Descriptions.Item>)}
  </Descriptions>
)

export default DescriptionListComponent
