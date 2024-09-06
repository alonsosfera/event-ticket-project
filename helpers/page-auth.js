import { getSession } from "next-auth/react"

/**
 * @param context
 * @param userRoles {?Array.<string>}
 */
export const pageAuth = async (context, userRoles = null) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false
      }
    }
  }

  const { role } = session.user
  if (userRoles && !userRoles.includes(role)) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    }
  }

  return {
    props: { role }
  }
}
