import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />
                <title>Way of Phoenix</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Pirata+One&display=swap" rel="stylesheet"/>
                <link href="/css/globals.css" rel="stylesheet" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}