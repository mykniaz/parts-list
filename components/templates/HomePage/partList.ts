import { title } from "process"

enum PartVariant {
  SOCKET = 'SOCKET',
  SWITCH_BASE = 'SWITCH_BASE',
  SWITCH_CROSS = 'SWITCH_CROSS',
  SWITCH_DOUBLE = 'SWITCH_DOUBLE',
  SWITCH_PASS_THROUGH = 'SWITCH_PASS_THROUGH',
  WARM_FLOOR_REGULATOR = 'WARM_FLOOR_REGULATOR'
}

const variantTitles: {[key in PartVariant]: string} = {
  [PartVariant.SOCKET]: 'Р.',
  [PartVariant.SWITCH_BASE]: 'В.',
  [PartVariant.SWITCH_CROSS]: 'В.Пер.',
  [PartVariant.SWITCH_DOUBLE]: 'В.Дв.',
  [PartVariant.SWITCH_PASS_THROUGH]: 'В.Пр.',
  [PartVariant.WARM_FLOOR_REGULATOR]: 'Т.П.'
}

const getPart = (variant?: PartVariant, description?: string): Part => {
  return {
    variant: variant || PartVariant.SOCKET,
    title: variantTitles[variant || PartVariant.SOCKET],
    description: !variant ? 'Розетка одинарная' : description,
  }
}

type Part = {
  variant: PartVariant,
  title: string
  description?: string
}

type Group = Array<Part>

type Room = {
  name: string
  groups: Array<Group>
}

type ApartmentPartList = Array<Room>

export const apartmentPartList:Array<Room> = [
  {
    name: 'Big Room',
    groups: [
      [
        getPart(),
        getPart(PartVariant.SWITCH_DOUBLE),
        getPart(),
      ]
    ]
  }
]
