import { Table } from "antd"


const UsersTableComponent = ({ dataSource, columns, rowSelection }) => {
return(
  <Table
    dataSource={dataSource}
    columns={columns}
    rowSelection={rowSelection} />
)
}

export default UsersTableComponent