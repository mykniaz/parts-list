export type Entity = {
  readonly id: string,
  readonly name?: string
}

export enum ElectricPointType {
  SOCKET = 'SOCKET',
  ETHERNET = 'ETHERNET',
  CABLE_TUNNEL = 'CABLE_TUNNEL',
  SWITCH_BASE = 'SWITCH_BASE',
  SWITCH_CROSS = 'SWITCH_CROSS',
  SWITCH_DOUBLE = 'SWITCH_DOUBLE',
  SWITCH_PASS_THROUGH = 'SWITCH_PASS_THROUGH',
  WARM_FLOOR_REGULATOR = 'WARM_FLOOR_REGULATOR'
}

export type ElectricPoint = Entity & {
  readonly type: ElectricPointType,
  readonly description?: string
}

export type ElectricPointGroupList = Entity & {
  readonly electricPointList: ReadonlyArray<ElectricPoint>
}

export type Room = Entity & {
  readonly electricPointGroupList: ReadonlyArray<ElectricPointGroupList>
}
