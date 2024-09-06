import { pageAuth } from "@/helpers/page-auth"
import UserRoleEnum from "@/models/user-role-enum"
import Users from "@/components/user/users-component"

export default function UsersPage() {
  return(
    <Users />
  )
}

export async function getServerSideProps(context) {
  return pageAuth(context, [UserRoleEnum.OWNER, UserRoleEnum.ADMIN])
}
