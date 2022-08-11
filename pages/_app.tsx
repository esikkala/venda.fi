import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';
import defaultTheme from '../themes/defaultTheme';
import { I18nProvider, defaultLocale } from '../contexts/I18nContext';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
};

function MessukeskusB2BApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <I18nProvider locale={defaultLocale}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        {getLayout(<Component {...pageProps} />)}
      </I18nProvider>
    </ThemeProvider>
  );
}

export default MessukeskusB2BApp;
