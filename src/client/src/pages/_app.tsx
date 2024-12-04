import React from 'react';
import { AppProps } from 'next/app';
import AppProvider from '../context/AppContext';
import Layout from '../components/Layout';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
