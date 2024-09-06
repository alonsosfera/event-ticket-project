import Head from "next/head"
import { getSession } from "next-auth/react"
import UserRoleEnum from "@/models/user-role-enum"
import Layout from "@/components/layout/layout-component"
import HomeComponent from "@/components/host/home-component"
import OwnerHomeComponent from "@/components/owner/owner-home-component"
import { pageAuth } from "@/helpers/page-auth"

export default function HomePage({ role }) {
  return (
    <>
      <Head>
        <title>PartyPass - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {role === UserRoleEnum.ADMIN && <div>ADMIN PAGE</div>}
        {role === UserRoleEnum.OWNER && <OwnerHomeComponent />}
        {role === UserRoleEnum.HOST && <HomeComponent />}
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return pageAuth(context)
}
