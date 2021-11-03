import Head from 'next/head';
import React from 'react';
import Footer from '@modules/Footer';
import Header from '@modules/Header';

type BaseLayoutProps = {
  readonly title: string
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'min-h-screen'}>
        <Header />
        <main className="mx-auto px-2 container max-w-screen-lg">
          {children}
        </main>
      </div>

      <Footer />
    </>
  );
};

export default BaseLayout;
