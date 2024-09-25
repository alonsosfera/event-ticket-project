import "@/styles/globals.scss"
import { Provider } from "react-redux"
import { Roboto } from "next/font/google"
import { SessionProvider } from "next-auth/react"
import { wrapper } from "@/store"

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400"
})

function App({ Component, pageProps: { session, ...rest } }) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <main className={roboto.className}>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </SessionProvider>
    </main>
  )
}

export default App
