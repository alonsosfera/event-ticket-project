import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import axios from "axios"

export default NextAuth({
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        // If no error and we have user data, return it
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_APP_URI}/api/auth/login`, credentials)
        return data.user
      }
    })
  ],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.type
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
      }
      return session
    }
  },
  pages: { signIn: "/auth/signin" },
  secret: process.env.NEXTAUTH_SECRET
})
