import type { Country } from '../origin';
import type { PersonData } from '../people';
import type { PhysiqueTags } from './tags';
import type { Seeder } from '@/lib';

import o from '@/data/physique.json';

import { getBMI, getHeight, getWeight } from './calc';
import { getTags } from './tags';

type OriginPhysiqueData = {
  [key in Country]?: {
    weight: { M: number; F: number };
    height: { M: number; F: number };
    cm: { M: number; F: number };
    kg: { M: number; F: number };
  };
};

export interface PhysiqueData {
  height: number;
  weight: number;
  bmi: number;
  tags: PhysiqueTags;
}

const originPhysique = o as OriginPhysiqueData;

export function getPhysique(seeder: Seeder, data: PersonData): PhysiqueData {
  const { gender, country } = data;
  const mx = originPhysique[country] ?? {
    weight: { M: 1, F: 1 },
    height: { M: 1, F: 1 }
  };

  const height = getHeight(seeder, gender) * mx.height[gender];
  const weight = getWeight(seeder, gender, height) * mx.weight[gender];
  const bmi = getBMI(height, weight);
  const tags = getTags(gender, height, weight);

  return { height, weight, bmi, tags };
}

export {
  getHeight,
  getWeight,
  getImperialHeight,
  getImperialWeight,
  getBMI
} from './calc';

export type { PhysiqueTags } from './tags';
