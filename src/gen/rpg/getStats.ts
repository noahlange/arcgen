import type { Country, Generation, Language } from '../origin';
import type { Stat } from './types';
import type { Seeder } from '@/lib';

import { Gender } from '../people';
import { getTags } from '../physique/tags';
import { getIQMod, getRandomStats } from './utils';

interface GetStatsData {
  age: number;
  gender: Gender;
  weight: number;
  height: number;
  country: Country;
  gen: Generation;
  languages: Language[];
}

const clamp = (min: number, max: number) => (value: number) =>
  Math.max(Math.min(value, max), min);

export function getStats(
  seeder: Seeder,
  data: GetStatsData
): Record<Stat, number> {
  const base = getRandomStats(seeder);
  const tags = getTags(data.gender, data.height, data.weight);

  base.INT += Math.max(0, data.languages.length - 1);
  base.INT = Math.round(base.INT * getIQMod(data.country, data.gen));

  if (Math.abs(tags.weight) >= 2) {
    const mod = tags.weight;
    base.CON += mod;
    base.AGI -= mod;
  }

  if (tags.weight < 0 || tags.height < 0) {
    // apologies, short/lightweight people
    base.CON += Math.round((tags.weight + tags.height) / 4);
  }

  switch (data.gender) {
    case Gender.M: {
      if (Math.abs(tags.height) > 2) {
        const mod = Math.round(tags.height / 2);
        base.CHA += mod;
      }
      break;
    }
    case Gender.F: {
      if (tags.weight > 2) {
        const mod = Math.round(tags.weight / 2);
        base.CHA -= mod;
      }
    }
  }

  const c = clamp(1, 10);

  return {
    DEX: c(base.DEX),
    AGI: c(base.AGI),
    CON: c(base.CON),
    INT: c(base.INT),
    PER: c(base.PER),
    CHA: c(base.CHA)
  };
}
