import { Descriptions } from "antd"


const UserList = ({ dataSource, columns }) => {

  return (
    <div>
      {dataSource.map (data => (
        <Descriptions
          style={{ padding: "1rem" }} key={data.key}>
          {columns.map (column => (
            column.dataIndex && (
              <Descriptions.Item
                style={{ borderBottom: "1px solid #d5dbdb", padding: "1rem" }}
                key={column.key}
                label={column.title}>
                {data[column.dataIndex]}
              </Descriptions.Item>
            )
          ))}
        </Descriptions>
      ))}
    </div>
  )
}

export default UserList