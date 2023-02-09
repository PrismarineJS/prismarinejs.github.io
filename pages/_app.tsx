import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    return(
    <>
    <Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=UA-128628977-2" />
        <meta property="og:title" content="PrismarineJS" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prismarine.js.org/" />
        <meta property="og:description" content="A Minecraft server, bot, and API all written in JavaScript" />
        <meta property="og:site_name" content="PrismarineJS" />
        <meta name="author" content="PrismarineJS Contributors"/>
        <meta name="description" content="A Minecraft server, bot, and API all written in JavaScript" />
        <meta name="application-name" content="PrismarineJS" />
        <link rel="icon" href="static/images/js_mini_icon.png" />
        <link rel="icon" href="static/images/js_mini_icon.png" type="image/x-icon" />
        <link rel="icon" href="static/images/js_mini_icon.png" type="shortcut icon" />
        <link rel="apple-touch-icon" href="static/images/icon.png" />
        <meta name="theme-color" content="#4DB396" />
        <link rel="manifest" href="static/manifest.json" />
        <link rel="shortcut icon" href="static/favicon.ico" />
        <title>PrismarineJS</title>
    </Head>
        <Component {...pageProps} />
    <Footer />
    </>
    );
};
