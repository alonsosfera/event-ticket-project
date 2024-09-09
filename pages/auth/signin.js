import Head from "next/head"
import { getSession } from "next-auth/react"
import LoginComponent from "@/components/auth/login-component"

function SignInPage() {
  return (
    <>
      <Head>
        <title>PartyPass - Iniciar sesión</title>
      </Head>
      <LoginComponent />
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default SignInPage
