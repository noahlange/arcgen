import { Seeder } from '../../lib';
import { RNG } from '../../utils';
import { Language } from '../origin';
import { getTags } from '../physique/tags';
import { Gender } from '../people/types';
import { Stat } from './types';

function getRandomStats(seeder: Seeder): Record<Stat, number> {
  const { rng } = seeder.use('stats');
  const roll = RNG.getRoller(rng.quick);
  const stats = Array.from('000000', () => roll('3d4-2'));

  return {
    DEX: stats[0],
    AGI: stats[1],
    CON: stats[2],
    INT: stats[3],
    PER: stats[4],
    CHA: stats[5]
  };
}

interface GetStatsData {
  age: number;
  gender: Gender;
  weight: number;
  height: number;
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

  if (Math.abs(tags.weight) >= 2) {
    const mod = tags.weight;
    base.CON += mod;
    base.AGI -= mod;
  }

  if (tags.weight < 0) {
    base.CON -= Math.ceil(tags.weight / 2);
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
