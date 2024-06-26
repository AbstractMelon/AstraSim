import React, { ReactNode } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Taskbar from './Taskbar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Astra OS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        {children}
        <Taskbar />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
