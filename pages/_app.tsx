import '../styles/globals.css';
import 'nprogress/nprogress.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
