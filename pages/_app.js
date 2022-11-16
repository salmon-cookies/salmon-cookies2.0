import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </NextUIProvider>
  );
}
