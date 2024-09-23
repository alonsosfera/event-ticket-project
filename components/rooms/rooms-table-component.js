import { Table } from "antd"


const RoomsTableComponent = ({ dataSource, columns }) => {

  return(
    <Table
      dataSource={dataSource} columns={columns}
      rowKey="id" />
  )
}

export default RoomsTableComponent