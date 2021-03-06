import Head from 'next/head';
import { AppWrapper } from '../context';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Upload image to IPFS</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <meta name='keywords' content='ipfs, upload image free, share image free' />
        <meta name='og:title' content='Upload image to IPFS' />
        <meta name='og:description' content='Upload and share images without losing quality with IPFS' />

        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='msapplication-TileColor' content='#3080EA' />
        <meta name='theme-color' content='#3080EA' />

        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@unllamas' />
        <meta name='twitter:creator' content='@unllamas' />
        <meta property='twitter:title' content='Upload image to IPFS' />
        <meta property='twitter:description' content='Upload and share images without losing quality with IPFS' />
        <meta property='twitter:image' content='./images/meta-image-min.png' />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Upload image to IPFS' />
        <meta property='og:description' content='Upload and share images without losing quality with IPFS' />
        <meta property='og:image' content='./images/meta-image-min.png' />
      </Head>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
