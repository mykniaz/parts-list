import React, { useMemo } from 'react';
import { getElectricPointTitle } from '@utils/parts';
import { ElectricPointType, Room } from '@globalTypes/entities';

type HomeProps = {
  readonly preloadedApartment: ReadonlyArray<Room>
}

const Home: React.FC<HomeProps> = ({ preloadedApartment }) => {
  const totalGroupsAmount = useMemo<{ readonly[key in ElectricPointType]: number}>(
    () => {
      return preloadedApartment.reduce(
        (acc) => {

          return acc;
        },
        {
          [ElectricPointType.SOCKET]: 0,
          [ElectricPointType.ETHERNET]: 0,
          [ElectricPointType.CABLE_TUNNEL]: 0,
          [ElectricPointType.SWITCH_BASE]: 0,
          [ElectricPointType.SWITCH_CROSS]: 0,
          [ElectricPointType.SWITCH_DOUBLE]: 0,
          [ElectricPointType.SWITCH_PASS_THROUGH]: 0,
          [ElectricPointType.WARM_FLOOR_REGULATOR]: 0
        }
      );
    }, [preloadedApartment]);

  return (
    <div>
      {
        preloadedApartment.map((room) => {
          return (
            <div className="mb-8 p-4 border rounded-md" key={room.name}>
              <h2 className="mb-4">{room.name}</h2>
              <div>
                {room.electricPointGroupList.map((group) => {
                  return (
                    <div className="mb-4 flex" key={group.id}>
                      {group.electricPointList.map((part) => {
                        return (
                          <div className='px-4 py-2 border' key={part.id} title={part.description}>
                            {getElectricPointTitle(part.type)}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      }
      <div>total broups = {totalGroupsAmount.SOCKET}</div>
    </div>
  );
};

export default Home;
