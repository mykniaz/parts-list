import React, { useMemo } from 'react';
import { getElectricPointData } from '@utils/parts';
import {
  Room,
  ElectricPointType,
} from '@globalTypes/entities';
import { getElectricGroupsList, getElectricPointsList } from '@utils/counts';

type HomeRoomProps = {
  readonly room: Room
}

const HomeRoom: React.FC<HomeRoomProps> = ({ room }) => {
  const roomSmeta = useMemo<{ readonly[key in ElectricPointType]: number }>(
    () => getElectricPointsList(room), [room]);

  const roomGroupSmeta = useMemo(
    () => getElectricGroupsList(room), [room]);

  return (
    <div className="mb-8 p-4 border rounded-md" key={room.name}>
      <h2 className="mb-4">{room.name}</h2>
      <div className="mb-8">
        {room.electricPointGroupList.map((group) => {
          return (
            <div className="mb-4 flex" key={group.id}>
              {group.electricPointList.map((part) => {
                const electricPartData = getElectricPointData(part.type);

                return (
                  <div className='px-4 py-2 border' key={part.id} title={electricPartData.description}>
                    {electricPartData.title}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-4">
            Электроточек в комнате:
          </div>
          <div>
            {Object.keys(roomSmeta).map((item) => {
              return roomSmeta[item as ElectricPointType] !== 0 && (
                <div>
                  {getElectricPointData(item as ElectricPointType).description}
                  ({getElectricPointData(item as ElectricPointType).title}):{' '}
                  {roomSmeta[item as ElectricPointType]}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="mb-4">
            Электрогрупп в комнате:
          </div>
          <div>
            {roomGroupSmeta.map((item) => {
              return (
                <div key={item.groupLength}>
                  Группа из {item.groupLength}: {item.amount}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoom;
