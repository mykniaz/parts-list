import { ReactElement } from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
