import { ElectricPoint, ElectricPointType } from '@globalTypes/entities';

type ElectricPointData = {
  readonly title: string;
  readonly description: string;
}

export const electricPointExtraData: { readonly[key in ElectricPointType]: ElectricPointData} = {
  [ElectricPointType.SOCKET]: {
    title: 'Р.',
    description: 'Розетка'
  },
  [ElectricPointType.ETHERNET]: {
    title: 'И.Р.',
    description: 'Интернет розетка'
  },
  [ElectricPointType.CABLE_TUNNEL]: {
    title: 'К.К.',
    description: 'Кабель канал'
  },
  [ElectricPointType.SWITCH_BASE]: {
    title: 'В.',
    description: 'Выключатель'
  },
  [ElectricPointType.SWITCH_CROSS]: {
    title: 'В.Пер.',
    description: 'Выключатель перекрестный'
  },
  [ElectricPointType.SWITCH_DOUBLE]: {
    title: 'В.Дв.',
    description: 'Выключатель двойной'
  },
  [ElectricPointType.SWITCH_PASS_THROUGH]: {
    title: 'В.Пр.',
    description: 'Выключатель проходной'
  },
  [ElectricPointType.WARM_FLOOR_REGULATOR]: {
    title: 'Т.П.',
    description: 'Теплый пол'
  }
};

export const getElectricPoint = (pointType?: ElectricPointType): ElectricPoint => {
  return {
    id: String(new Date().valueOf()),
    type: pointType || ElectricPointType.SOCKET,
  };
};

export const getElectricPointData = (pointType: ElectricPointType): ElectricPointData => {
  return {
    ...electricPointExtraData[pointType || ElectricPointType.SOCKET]
  };
};
