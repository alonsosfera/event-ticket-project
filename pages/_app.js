import "@/styles/globals.scss"
import { Roboto } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import { EventProvider } from "@/components/events/event-context"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <main className={roboto.className}>
      <EventProvider>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </EventProvider>
    </main>
  )
}
