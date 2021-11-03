import { NextPage } from 'next';
import BaseLayout from '@layouts/BaseLayout';
import Home from '@templates/Home';

const HomePage: NextPage = () => {
  return (
    <BaseLayout title={'Home Page'}>
      <Home/>
    </BaseLayout>
  );
};

export default HomePage;
