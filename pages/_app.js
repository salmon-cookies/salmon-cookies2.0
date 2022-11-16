import * as React from 'react';

// 1. import `NextUIProvider` component
import { createTheme, NextUIProvider } from '@nextui-org/react';
import Layout from '../components/layout';

const theme = createTheme({
  type: 'light',
  theme: {
    colors: {
      background: '#FFFFFF',
      text: '#11181C',
      accentText: '#D6009A',
      primaryLight: '#FFC2EE',
      primaryLightHover: '#FAA8C5',
    },
    font: {
      roboto: "'Roboto Slab'",
    }
  }
})

export default function App({ Component, pageProps }) {
  // 2. Use at the root of your app
  return (
    <NextUIProvider theme={theme}>
      <Layout>
        <Component { ...pageProps } />
      </Layout>
    </NextUIProvider>
  );
}
