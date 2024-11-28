// pages/_app.tsx
import { ThemeProvider } from "../theme/ThemeProvider";
import "../styles/globals.css";
import Head from "next/head";
import { AppProps } from "next/app"; // Import AppProps from next/app

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>AK Enterprises</title>
        <meta
          name="description"
          content="AK Enterprises - Your one-stop solution for all your business needs."
        />
        <meta
          name="keywords"
          content="business, services, solutions, AK Enterprises"
        />
        <meta name="author" content="AK Enterprises Team" />
        <meta property="og:title" content="AK Enterprises" />
        <meta
          property="og:description"
          content="Your one-stop solution for all your business needs."
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.akenterprises.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AK Enterprises" />
        <meta
          name="twitter:description"
          content="Your one-stop solution for all your business needs."
        />
        <link rel="icon" href="/Brand-logo.svg" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
