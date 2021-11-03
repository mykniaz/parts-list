import { GetServerSideProps, NextPage } from 'next';
import BaseLayout from '@layouts/BaseLayout';
import Home from '@templates/Home';
import { ErrorProps } from 'next/error';
import { Room } from '@globalTypes/entities';
import { getApartmentData } from './api/apartment';

type HomePageProps = {
  readonly preloadedApartment: ReadonlyArray<Room>
  readonly error: ErrorProps | null
}

const HomePage: NextPage<HomePageProps> = ({ preloadedApartment }) => {
  return (
    <BaseLayout title={'Home Page'}>
      <Home preloadedApartment={preloadedApartment}/>
    </BaseLayout>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async () => {
  const initialSSP = {
    error: null,
    preloadedApartment: []
  };

  try {
    const data = await getApartmentData();

    return {
      props: {
        ...initialSSP,
        preloadedApartment: data.apartment || []
      }
    };

  } catch (error) {
    return {
      props: {
        ...initialSSP
      },
      isNotFound: true
    };
  }
};
