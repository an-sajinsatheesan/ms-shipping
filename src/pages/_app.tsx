import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css'
import { AppPropsWithLayout } from '@/types/page';
import '@/styles/globals.scss'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';



function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const getLayout = Component.getLayout ?? ((page) => page);

    return getLayout(
        <>
            <Head>
                <title>Modern Star Shipping LLC</title>
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <meta
                    name="description"
                    content="Modern Star Shipping LLC offers comprehensive logistics and freight forwarding solutions across the UAE and the EMEA region, specializing in efficient cargo handling and global shipping services."
                />
                <meta
                    content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
                    name="viewport"
                />
                <meta
                    name="keywords"
                    content="Modern Star Shipping, logistics, freight forwarding, cargo services, shipping company, UAE logistics, EMEA freight solutions, international shipping"
                />
                <meta
                    name="title"
                    content="Modern Star Shipping LLC | Your Trusted Partner in Global Logistics"
                />
                <meta
                    name="og:title"
                    content="Modern Star Shipping LLC | Your Trusted Partner in Global Logistics"
                />
                <meta
                    name="og:description"
                    content="Modern Star Shipping LLC offers reliable logistics and freight forwarding services across the UAE and EMEA region. We specialize in cargo transportation, customs clearance, and global shipping solutions."
                />
                <meta property="og:url" content="https://modernstarshipping.com/" />
                <meta name="twitter:title" content="Modern Star Shipping LLC" />
                <meta
                    name="twitter:description"
                    content="Explore global logistics solutions with Modern Star Shipping LLC. Trusted freight forwarding and cargo services across UAE and beyond."
                />
                <meta
                    name="twitter:image"
                    content="https://modernstarshipping.com/static/assets/logo.webp"
                />
                <meta
                    name="google-site-verification"
                    content="YOUR_VERIFICATION_CODE_HERE"
                />
                <meta
                    name="twitter:card"
                    content="summary_large_image"
                />
                <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap"
          rel="stylesheet"
        />
            </Head>


            <main>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </main>
        </>
    );
}

export default MyApp;