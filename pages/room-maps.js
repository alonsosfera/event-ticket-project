import Layout from "@/components/layout/layout-component"
import RoomMaps from "@/components/room-maps/room-maps-components"
import { pageAuth } from "@/helpers/page-auth"

function RoomMapsPage() {
  return(
    <Layout>
      <RoomMaps />
    </Layout>
  )
}

export default RoomMapsPage

export async function getServerSideProps(context) {
  return pageAuth(context)
}