import '../styles/global.css';
import Header from '../components/header';
import type {AppProps} from 'next/app';

export default ({Component, pageProps}: AppProps) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};
