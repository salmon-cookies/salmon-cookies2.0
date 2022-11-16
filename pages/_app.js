import * as React from 'react';

// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider>
      <Component { ...pageProps } />
    </NextUIProvider>
  );
}
