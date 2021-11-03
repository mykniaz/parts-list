import React, { useMemo } from 'react';
import { getElectricPointTitle } from '@utils/parts';
import {
  Room,
  ElectricPoint,
  ElectricPointType,
} from '@globalTypes/entities';

type HomeRoomProps = {
  readonly room: Room
}

const HomeRoom: React.FC<HomeRoomProps> = ({ room }) => {
  const totalPointTypesAmount = useMemo<{ readonly[key in ElectricPointType]: number }>(
    () => {
      return room.electricPointGroupList.reduce(
        (acc, electricPointGroup) => {

          const getAccRow = (
            type: ElectricPointType,
            group: ReadonlyArray<ElectricPoint>,
            acc: { readonly[key in ElectricPointType]: number }
          ): number => acc[type] + group.filter(item => item.type === type).length;

          return {
            [ElectricPointType.SOCKET]:
              getAccRow(ElectricPointType.SOCKET, electricPointGroup.electricPointList, acc),
            [ElectricPointType.ETHERNET]:
              getAccRow(ElectricPointType.ETHERNET, electricPointGroup.electricPointList, acc),
            [ElectricPointType.CABLE_TUNNEL]:
              getAccRow(ElectricPointType.CABLE_TUNNEL, electricPointGroup.electricPointList, acc),
            [ElectricPointType.SWITCH_BASE]:
              getAccRow(ElectricPointType.SWITCH_BASE, electricPointGroup.electricPointList, acc),
            [ElectricPointType.SWITCH_CROSS]:
              getAccRow(ElectricPointType.SWITCH_CROSS, electricPointGroup.electricPointList, acc),
            [ElectricPointType.SWITCH_DOUBLE]:
              getAccRow(ElectricPointType.SWITCH_DOUBLE, electricPointGroup.electricPointList, acc),
            [ElectricPointType.SWITCH_PASS_THROUGH]:
              getAccRow(ElectricPointType.SWITCH_PASS_THROUGH, electricPointGroup.electricPointList, acc),
            [ElectricPointType.WARM_FLOOR_REGULATOR]: 
              getAccRow(ElectricPointType.WARM_FLOOR_REGULATOR, electricPointGroup.electricPointList, acc),
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
    }, [room]);

  return (
    <div className="mb-8 p-4 border rounded-md" key={room.name}>
      <h2 className="mb-4">{room.name}</h2>
      <div className="mb-8">
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

      <div>
          Total groups:
        <div>
          <div>
            {getElectricPointTitle(ElectricPointType.SOCKET)}:
            {totalPointTypesAmount.SOCKET}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.ETHERNET)}:
            {totalPointTypesAmount.ETHERNET}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.CABLE_TUNNEL)}:
            {totalPointTypesAmount.CABLE_TUNNEL}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.SWITCH_BASE)}:
            {totalPointTypesAmount.SWITCH_BASE}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.SWITCH_CROSS)}:
            {totalPointTypesAmount.SWITCH_CROSS}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.SWITCH_DOUBLE)}:
            {totalPointTypesAmount.SWITCH_DOUBLE}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.SWITCH_PASS_THROUGH)}:
            {totalPointTypesAmount.SWITCH_PASS_THROUGH}
          </div>
          <div>
            {getElectricPointTitle(ElectricPointType.WARM_FLOOR_REGULATOR)}:
            {totalPointTypesAmount.WARM_FLOOR_REGULATOR}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeRoom;
