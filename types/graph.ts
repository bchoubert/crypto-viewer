export interface ComputedPoint {
  value: number,
  dataPointText: string;
}

export enum SparkineTimespanEnum {
  '7D'= '7D',
  '3D'= '3D',
  '1D'= '1D',
  '12H'= '12H',
  '6H'= '6H',
}

export const sparkineTimespanValues: Record<SparkineTimespanEnum, number> = {
  [SparkineTimespanEnum["7D"]]: 169,
  [SparkineTimespanEnum["3D"]]: 73,
  [SparkineTimespanEnum["1D"]]: 25,
  [SparkineTimespanEnum["12H"]]: 13,
  [SparkineTimespanEnum["6H"]]: 7,
}