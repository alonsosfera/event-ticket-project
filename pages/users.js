import axios from "axios"
import Head from "next/head"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { pageAuth } from "@/helpers/page-auth"
import UserRoleEnum from "@/models/user-role-enum"
import Users from "@/components/user/users-component"
import Layout from "@/components/layout/layout-component"
import { fetchUsersList, setUsersList } from "@/slices/users-slice"

export default function UsersPage({ user }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUsersList())
    axios.get(`/api/users/list?tenantId=${user.tenants[0]?.id}`)
      .then(({ data }) => dispatch(setUsersList(data.users)))
  }, [dispatch, user])

  return (
    <>
      <Head>
        <title>PartyPass - Usuarios</title>
      </Head>
      <Layout>
        <Users />
      </Layout>
    </>
  )
}

export async function getServerSideProps(context) {
  return pageAuth(context, [UserRoleEnum.OWNER, UserRoleEnum.ADMIN])
}
