import "@/styles/globals.scss"
import { Roboto } from "next/font/google"
import { SessionProvider } from "next-auth/react"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main className={roboto.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </main>
  )
}
