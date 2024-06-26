import React, { ReactNode } from 'react';
import Head from 'next/head';

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
      </div>
    </>
  );
};

export default Layout;
