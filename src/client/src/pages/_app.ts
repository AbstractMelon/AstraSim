// importing the provided NextJS type
import type { AppProps } from "next/app";

interface CustomPageProps {
}

export default function App({Component, pageProps,}: AppProps<CustomPageProps>) {
  return <Component {...pageProps} />
} 