import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'react-loading-skeleton/dist/skeleton.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store/configureStore';
import { Provider } from 'react-redux';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, ...rest }: AppProps) {
  const { props, store } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
