import React, { ReactNode } from 'react';
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';

import Header from '../src/Components/Global/Header'
import Footer from '../src/Components/Global/Footer';

import '../styles/globals.css'
import '../styles/animations.css';

type ILayout = {
  header: any;
  footer: any;
  children: ReactNode;
};

const Layout = ({header, footer, children}: ILayout) => {
  const router = useRouter();
  const { asPath } = router;
  const navBarWhite = ["/technology"];
  const changeNavTextColor = navBarWhite.includes(asPath) ? "text-white" : "text-black";

  return (
    <>
      <Header {...header} textColor={changeNavTextColor}/>
      {children}
      <div id="main-modals-portal" />
      <Footer {...footer}/>
    </>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const { header, footer } = pageProps
  return (
    <Layout header={header} footer={footer}>
      <Component {...pageProps} />
    </Layout>
  );
};
