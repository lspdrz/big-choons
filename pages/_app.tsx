/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { AppProps } from 'next/app'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}></Component>
}

export default MyApp
