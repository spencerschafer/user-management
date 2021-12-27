import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {AppContext} from '../lib/context';

function MyApp({Component, pageProps}: AppProps) {
  return (<>
    <Head>
      <title>Ericsson | User Management</title>
      <link rel='shortcut icon' type='image/x-icon' href={'/favicon.ico'} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <AppContext>
      <Component {...pageProps} />
    </AppContext>
  </>);
}

export default MyApp;
