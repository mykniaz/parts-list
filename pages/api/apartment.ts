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
          getElectricPoint(ElectricPointType.ETHERNET),
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
          getElectricPoint(ElectricPointType.SWITCH_BASE),
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
  },
  {
    id: 'smallBalcony',
    name: 'Small Balcony',
    electricPointGroupList: [
      {
        id: '1',
        name: 'Near the table',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '2',
        name: 'On The Left Of The Bead',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(ElectricPointType.WARM_FLOOR_REGULATOR),
        ]
      }
    ],
  },
  {
    id: 'smallRoom',
    name: 'Small Room',
    electricPointGroupList: [
      {
        id: '1',
        name: 'PC group',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(ElectricPointType.ETHERNET),
        ]
      },
      {
        id: '2',
        name: 'On The Top Of The Bead',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE),
          getElectricPoint(ElectricPointType.SWITCH_PASS_THROUGH),
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      },
      {
        id: '3',
        name: 'Under the TV',
        electricPointList: [
          getElectricPoint(ElectricPointType.ETHERNET),
          getElectricPoint(ElectricPointType.CABLE_TUNNEL),
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '4',
        name: 'Behind the TV',
        electricPointList: [
          getElectricPoint(ElectricPointType.CABLE_TUNNEL),
          getElectricPoint(),
        ]
      },
      {
        id: '5',
        name: 'Base Room Light',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      },
      {
        id: '6',
        name: 'Balcony',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      }
    ],
  },
  {
    id: 'bigBalcony',
    name: 'Big Balcony',
    electricPointGroupList: [
      {
        id: '1',
        name: 'wall',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(ElectricPointType.WARM_FLOOR_REGULATOR),
        ]
      },
      {
        id: '2',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
    ],
  },
  {
    id: 'toilet',
    name: 'Toilet (?)',
    electricPointGroupList: [
      {
        id: '1',
        name: 'mirrow',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
          getElectricPoint(ElectricPointType.SWITCH_BASE)
        ]
      },
      {
        id: '2',
        name: 'wash mashine',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '3',
        name: 'refresh air',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE),
        ]
      },
    ],
  },
  {
    id: 'kitchen',
    name: 'Kitchen',
    electricPointGroupList: [
      {
        id: '1',
        name: 'Base and second light',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_DOUBLE)
        ]
      },
      {
        id: '2',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '3',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(),
        ]
      },
      {
        id: '4',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
        ]
      },
      {
        id: '5',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
        ]
      },
      {
        id: '6',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
        ]
      },
      {
        id: '7',
        name: 'electronix',
        electricPointList: [
          getElectricPoint(),
        ]
      },
    ],
  },
  {
    id: 'hall',
    name: 'Hall',
    electricPointGroupList: [
      {
        id: '1',
        name: 'Base',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE)
        ]
      },
      {
        id: '2',
        name: 'tailen',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE)
        ]
      },
      {
        id: '3',
        name: 'bathroom',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_BASE)
        ]
      },
      {
        id: '4',
        name: 'router',
        electricPointList: [
          getElectricPoint(),
          getElectricPoint(ElectricPointType.ETHERNET),
        ]
      },
      {
        id: '5',
        name: 'base in the end of hall',
        electricPointList: [
          getElectricPoint(ElectricPointType.SWITCH_PASS_THROUGH),
        ]
      },
    ],
  },
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
