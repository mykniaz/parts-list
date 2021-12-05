import { ElectricPoint, ElectricPointType, Room } from '@globalTypes/entities';

export const getElectricPointsList = (room: Room): { readonly[key in ElectricPointType]: number } => {
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
};

export const getElectricGroupsList =
  (room: Room): ReadonlyArray<{readonly groupLength: number, readonly amount: number}>  => {
    return room.electricPointGroupList
      .reduce<ReadonlyArray<{readonly groupLength: number, readonly amount: number}>>(
        (acc, group) => {
          const existIndex = acc.findIndex(item => item.groupLength === group.electricPointList.length);

          if (existIndex === -1) {
            return [
              ...acc,
              {
                groupLength: group.electricPointList.length,
                amount: 1,
              }
            ];
          }

          return [
            ...acc.slice(0, existIndex),
            {
              ...acc[existIndex],
              amount: acc[existIndex].amount + 1,
            },
            ...acc.slice(existIndex + 1, acc.length),
          ];
        },
        []
      );
  };
