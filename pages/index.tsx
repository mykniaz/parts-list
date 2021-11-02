import Head from 'next/head'
import BaseLayout from '/components/layouts/BaseLayout';
import HomePage from '/components/templates/HomePage';

export default function Home() {
  return (
      <BaseLayout title={'Home Page'}>
        <HomePage />
      </BaseLayout>
  )
}
