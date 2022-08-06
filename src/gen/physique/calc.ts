import type { Seeder } from '../../lib/Seeder';

import { Gender } from '../people';

const heights = {
  [Gender.M]: [165, 210, 1.75],
  [Gender.F]: [155, 200, 1.75]
};

const weights = {
  [Gender.M]: [1, 3, 2.25],
  [Gender.F]: [1, 2.75, 2.25]
};

const idealBodyWeight = {
  [Gender.M]: (cm: number) => 50 + 0.9 * cm - 152,
  [Gender.F]: (cm: number) => 46 + 0.9 * cm - 152
};

export function getHeight(seeder: Seeder, gender: Gender): number {
  const { normal } = seeder.use('height');
  const [min, max, skew] = heights[gender];
  return Math.round(normal.skew(min - 5, max + 5, skew, 3));
}

export function getWeight(
  seeder: Seeder,
  gender: Gender,
  height: number
): number {
  const { normal } = seeder.use('weight');
  const ideal = idealBodyWeight[gender](height);
  const [min, max, skew] = weights[gender];
  return Math.round(normal.skew(ideal * min, ideal * max, skew, 5));
}

export function getImperialHeight(cm: number): string {
  const inches = cm / 2.54;
  const feet = Math.floor(inches / 12);
  const leftover = Math.round(inches - feet * 12);
  return leftover === 12 ? `${feet + 1}'0"` : `${feet}'${leftover}"`;
}

export function getImperialWeight(kg: number): number {
  return Math.round(kg * 2.2);
}

export function getBMI(cm: number, kg: number): number {
  return parseFloat((kg / (cm / 100) ** 2).toFixed(2));
}
