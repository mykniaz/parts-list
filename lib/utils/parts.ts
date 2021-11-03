import { ElectricPoint, ElectricPointType } from '@globalTypes/entities';

export const variantTitles: { readonly[key in ElectricPointType]: string} = {
  [ElectricPointType.SOCKET]: 'Р.',
  [ElectricPointType.ETHERNET]: 'И.Р.',
  [ElectricPointType.CABLE_TUNNEL]: 'К.К.',
  [ElectricPointType.SWITCH_BASE]: 'В.',
  [ElectricPointType.SWITCH_CROSS]: 'В.Пер.',
  [ElectricPointType.SWITCH_DOUBLE]: 'В.Дв.',
  [ElectricPointType.SWITCH_PASS_THROUGH]: 'В.Пр.',
  [ElectricPointType.WARM_FLOOR_REGULATOR]: 'Т.П.'
};

export const getElectricPoint = (pointType?: ElectricPointType, description?: string): ElectricPoint => {
  return {
    id: String(new Date().valueOf()),
    type: pointType || ElectricPointType.SOCKET,
    ...(!pointType ? { description: 'Розетка одинарная' } : description ? { description } : {}),
  };
};

export const getElectricPointTitle = (pointType: ElectricPointType): string => {
  return variantTitles[pointType || ElectricPointType.SOCKET];
};
