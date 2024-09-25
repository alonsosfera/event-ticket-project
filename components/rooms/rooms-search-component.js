import { Row, Col, Space, Input, Button } from "antd"
import { SettingOutlined } from "@ant-design/icons"
import { useState } from "react"

const RoomsSearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  return (
    <Row
      justify="end" align="middle"
      style={{ marginBottom: "25px" }} gutter={[28, 6]}>
      <Col xs={24} lg={12}>
        <Space.Compact>
          <Input
            placeholder="Buscar salón"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} />
          <Button icon={<SettingOutlined />} onClick={handleSearch}>
            Buscar
          </Button>
        </Space.Compact>
      </Col>
      <Col>
        <Button>Descargar</Button>
      </Col>
    </Row>
  )
}

export default RoomsSearchComponent
