import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyle } from '../styles/GlobalStyle';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

export default App;
