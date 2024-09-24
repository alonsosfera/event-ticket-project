import Rooms from "@/components/rooms/rooms-component"
import Layout from "@/components/layout/layout-component"
import { pageAuth } from "@/helpers/page-auth"

function RoomsPage() {
  return (
    <Layout>
      <Rooms />
    </Layout>
  )
}

export default RoomsPage

export async function getServerSideProps(context) {
  return pageAuth(context)
}