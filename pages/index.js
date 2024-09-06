import Head from "next/head"
import { getSession } from "next-auth/react"
import Layout from "@/components/layout/layout-component"
import HomeComponent from "@/components/host/home-component"
import OwnerHomeComponent from "@/components/owner/owner-home-component"

export default function HomePage({ role }) {
  return (
    <>
      <Head>
        <title>PartyPass - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {role === "ADMIN" && <div>ADMIN PAGE</div>}
        {role === "OWNER" && <OwnerHomeComponent />}
        {role === "HOST" && <HomeComponent />}
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false
      }
    }
  }

  return {
    props: { role: session.user.role }
  }
}
