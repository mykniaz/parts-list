import type { NextApiRequest, NextApiResponse } from 'next';
import { getElectricPoint } from '@utils/parts';
import { ElectricPointType, Room } from '@globalTypes/entities';

export const apartmentPartList:ReadonlyArray<Room> = [
  {
    id: 'bigRoom',
    name: 'Big Room',
    electricPointGroupList: [
      {
        id: '1',
        name: 'PC group',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(ElectricPointType.ETHERNET, 'Интернет розетка'),
        ]
      },
      {
        id: '2',
        name: 'On The Left Of The Bead',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(ElectricPointType.SWITCH_PASS_THROUGH),
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      },
      {
        id: '3',
        name: 'On The Right Of The Bead',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(ElectricPointType.SWITCH_CROSS),
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      },
      {
        id: '4',
        name: 'Near The Woman Table',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '5',
        name: 'Under the TV',
        electricPointList: [
          getElectricPoint(ElectricPointType.ETHERNET),
          getElectricPoint(ElectricPointType.CABLE_TUNNEL),
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '6',
        name: 'Behind the TV',
        electricPointList: [
          getElectricPoint(ElectricPointType.CABLE_TUNNEL),
          getElectricPoint(),
        ]
      },
      {
        id: '7',
        name: 'Base Room Light',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_PASS_THROUGH),
        ]
      },
      {
        id: '8',
        name: 'Balcony',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      }
    ],
  }
];

const timeout = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

type Data = {
  readonly apartment: ReadonlyArray<Room>
}

export const getApartmentData = async (): Promise<Data> => {
  await timeout(1000);
  return { apartment: apartmentPartList };
};

const handler = async(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): Promise<void> => {
  const apartmentData = await getApartmentData();

  res.status(200).json(apartmentData);
};

export default handler;
