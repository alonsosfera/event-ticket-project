import "@/styles/globals.scss"
import { Provider } from "react-redux"
import { Roboto } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import { wrapper } from "@/store"
import { EventProvider } from "@/components/events/event-context"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

function App({ Component, pageProps: { session, ...rest } }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <main className={roboto.className}>
      <EventProvider>
        <SessionProvider session={session}>
          <Provider store={store}>
            <Component {...props} />
          </Provider>
        </SessionProvider>
      </EventProvider>
    </main>
  )
}

export default App
