import { EventProvider } from "@/components/events/event-context"
import Layout from "@/components/layout/layout-component"
import OwnerHomeComponent from "@/components/owner/owner-home-component"


const OwnerHome = () => {
  return (
    <EventProvider>
      <Layout>
        <OwnerHomeComponent />
      </Layout>
    </EventProvider>
  )
}

export default OwnerHome
