import { Table } from "antd"


const RoomsTableComponent = ({ dataSource, columns }) => {

  return(
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default RoomsTableComponent