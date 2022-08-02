import { Seeder } from '../../lib';
import { PersonData } from '../people';
import { PhysiqueTags, getTags } from './tags';
import { getWeight, getHeight, getBMI } from './calc';

export interface PhysiqueData {
  height: number;
  weight: number;
  bmi: number;
  tags: PhysiqueTags;
}

export function getPhysique(seeder: Seeder, person: PersonData): PhysiqueData {
  const height = getHeight(seeder, person.gender);
  const weight = getWeight(seeder, person.gender, height);
  const bmi = getBMI(height, weight);
  const tags = getTags(person.gender, height, weight);

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
