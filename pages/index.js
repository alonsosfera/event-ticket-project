import Head from "next/head"
import UserRoleEnum from "@/models/user-role-enum"
import Layout from "@/components/layout/layout-component"
import HomeComponent from "@/components/host/home-component"
import OwnerHomeComponent from "@/components/owner/owner-home-component"
import { pageAuth } from "@/helpers/page-auth"

export default function HomePage({ user }) {
  const { role } = user
  return (
    <>
      <Head>
        <title>PartyPass - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {[UserRoleEnum.OWNER, UserRoleEnum.ADMIN].includes(role) && <OwnerHomeComponent />}
        {role === UserRoleEnum.HOST && <HomeComponent />}
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return pageAuth(context)
}
