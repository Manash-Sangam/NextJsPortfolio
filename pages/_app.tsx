import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to my portfolio website. I am a software engineer, web developer, and tech enthusiast." />
        <meta name="keywords" content="portfolio, web developer, software engineer, projects" />
        <meta name="author" content="Manash Sangam" />
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
