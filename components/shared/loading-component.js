import { Col, Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { Flex } from "antd"

const LoadingComponent = () => {
  return (
    <Col order={5} span={24}>
      <Flex
        align="center" justify="center"
        style={{ height: "10vh" }}>
        <Spin indicator={<LoadingOutlined spin />} size="large" />
      </Flex>
    </Col>
  )
}

export default LoadingComponent
