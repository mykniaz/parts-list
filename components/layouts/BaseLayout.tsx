import Head from 'next/head';

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

        <div class="container mx-auto px-4 min-h-screen">
          {children}
        </div>

        <footer className="flex items-center justify-center w-full h-24 border-t">
          footer
        </footer>
      </>
  )
}

export default BaseLayout;
