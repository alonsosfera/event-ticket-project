import { Descriptions } from "antd"


const UserList = ({ dataSource, columns }) => {

  return (
    <div>
      {dataSource.map ((data , index) => (
        <Descriptions key={data.key} title={`Salón ${index + 1}`}>
          {columns.map (column => (
            column.dataIndex && (
              <Descriptions.Item key={column.key} label={column.title}>
                {data[ column.dataIndex ]}
              </Descriptions.Item>
            )
          ))}
        </Descriptions>
      ))}
    </div>
  )
}

export default UserList