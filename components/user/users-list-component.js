import { Col , Descriptions , Row } from "antd"

const UserList = ({ dataSource, columns }) => {
  return (
    <Row gutter={[16, 16]}>
      {dataSource.map(data => (
        // eslint-disable-next-line react/jsx-key
        <Col>
          <Descriptions
            style={{ padding: "1rem", background: "#F4F5F7" }}
            key={data.key}
            labelStyle={{ width: "30%", textAlign: "right", paddingRight: "1rem" }}
            contentStyle={{ width: "70%", textAlign: "left" }}>
            {columns.map(
            column =>
              column.dataIndex && (
                <Descriptions.Item
                  style={{
                    borderBottom: "1px solid #d5dbdb",
                    padding: "1rem"
                  }}
                  key={column.key}
                  label={column.title}>
                  {data[column.dataIndex]}
                </Descriptions.Item>
              )
          )}
          </Descriptions>
        </Col>
      ))}
    </Row>
  )
}

export default UserList
