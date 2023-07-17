import type { AppProps } from "next/app";
import '../public/css/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}