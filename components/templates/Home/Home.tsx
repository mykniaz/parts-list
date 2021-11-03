import React from 'react';
import { Room } from '@globalTypes/entities';
import HomeRoom from './HomeRoom';

type HomeProps = {
  readonly preloadedApartment: ReadonlyArray<Room>
}

const Home: React.FC<HomeProps> = ({ preloadedApartment }) => {

  return (
    <div>
      {preloadedApartment.map((room) => {
        return <HomeRoom room={room} key={room.id} />;
      })}
    </div>
  );
};

export default Home;
