import React, { useMemo } from 'react';
import { ElectricPointType, Room } from '@globalTypes/entities';
import HomeRoom from './HomeRoom';
import { getElectricPointsList } from '@utils/counts';
import { getElectricPointData } from '@utils/parts';

type HomeProps = {
  readonly preloadedApartment: ReadonlyArray<Room>
}

const Home: React.FC<HomeProps> = ({ preloadedApartment }) => {

  const smetaElectricPointsType = useMemo<{ readonly[key in ElectricPointType]: number }>(() => {
    return preloadedApartment.reduce(
      (acc, room) => {

        const roomAcc = getElectricPointsList(room);
    
        return {
          [ElectricPointType.SOCKET]:
            acc[ElectricPointType.SOCKET] + roomAcc[ElectricPointType.SOCKET],
          [ElectricPointType.ETHERNET]:
            acc[ElectricPointType.ETHERNET] + roomAcc[ElectricPointType.ETHERNET],
          [ElectricPointType.CABLE_TUNNEL]:
            acc[ElectricPointType.CABLE_TUNNEL] + roomAcc[ElectricPointType.CABLE_TUNNEL],
          [ElectricPointType.SWITCH_BASE]:
            acc[ElectricPointType.SWITCH_BASE] + roomAcc[ElectricPointType.SWITCH_BASE],
          [ElectricPointType.SWITCH_CROSS]:
            acc[ElectricPointType.SWITCH_CROSS] + roomAcc[ElectricPointType.SWITCH_CROSS],
          [ElectricPointType.SWITCH_DOUBLE]:
            acc[ElectricPointType.SWITCH_DOUBLE] + roomAcc[ElectricPointType.SWITCH_DOUBLE],
          [ElectricPointType.SWITCH_PASS_THROUGH]:
            acc[ElectricPointType.SWITCH_PASS_THROUGH] + roomAcc[ElectricPointType.SWITCH_PASS_THROUGH],
          [ElectricPointType.WARM_FLOOR_REGULATOR]:
            acc[ElectricPointType.WARM_FLOOR_REGULATOR] + roomAcc[ElectricPointType.WARM_FLOOR_REGULATOR],
        };
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
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-16">
          <div className="mb-8">
            Электроточек всего:
          </div>
          <div>
            {Object.keys(smetaElectricPointsType).map((item) => {
              return smetaElectricPointsType[item as ElectricPointType] !== 0 && (
                <div>
                  {getElectricPointData(item as ElectricPointType).description}
                  ({getElectricPointData(item as ElectricPointType).title}):
                  {smetaElectricPointsType[item as ElectricPointType]}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="mb-4">
            Электрогрупп всего (ДЕМО):
          </div>
          <div>
            <div>
              Группа из 5: 3
            </div>
            <div>
              Группа из 4: 2
            </div>
            <div>
              Группа из 3: 7
            </div>
            <div>
              Группа из 2: 7
            </div>
            <div>
              Группа из 1: 14
            </div>
          </div>
        </div>
      </div>

      <div>
        {preloadedApartment.map((room) => {
          return <HomeRoom room={room} key={room.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
