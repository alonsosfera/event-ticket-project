import axios from "axios"
import Head from "next/head"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { pageAuth } from "@/helpers/page-auth"
import UserRoleEnum from "@/models/user-role-enum"
import Layout from "@/components/layout/layout-component"
import { pageAuth } from "@/helpers/page-auth"import Rooms from "@/components/rooms/rooms-component"
import { fetchRoomsList, setRoomsList } from "@/slices/rooms-slice"

function RoomsPage({ user }) {
  const dispatch = useDispatch()

  useEffect(() => {
    const tenantId = user.tenants[0]?.id
    if (tenantId) {
      dispatch(fetchRoomsList())
      axios.get(`/api/event-halls/list?tenantId=${tenantId}`)
        .then(({ data }) => dispatch(setRoomsList(data)))
        .catch(err => console.error("Error fetching rooms:", err))
    }
  }, [dispatch, user])

  return (
    <>
      <Head>
        <title>PartyPass - Salones</title>
      </Head>
      <Layout>
        <Rooms />
      </Layout>
    </>
  )
}

export default RoomsPage

export async function getServerSideProps(context) {
  return pageAuth(context, [UserRoleEnum.OWNER, UserRoleEnum.ADMIN])
}
