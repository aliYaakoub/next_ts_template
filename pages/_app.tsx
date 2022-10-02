import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import 'react-loading-skeleton/dist/skeleton.css';
import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { wrapper } from 'store/configureStore';
import { Provider } from 'react-redux';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
// import { ReactQueryDevtools } from 'react-query/devtools';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, ...rest }: AppProps) {
  const { props, store } = wrapper.useWrappedStore(rest);
  const queryClient = React.useRef(new QueryClient());
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient.current}>
        {/* to be able to prefetch the data in SSR */}
        <Hydrate state={rest.pageProps.dehydratedState}>
          <Component {...props} />
          {/* enable this to debug useQuery hooks */}
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Hydrate>
      </QueryClientProvider>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
