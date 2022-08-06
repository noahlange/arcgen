import type { Stat } from './types';
import type { Seeder } from '@/lib';

import iq from '@/data/iq.json';
import { RNG } from '@/utils';

import { Country, Generation } from '../origin';

export function getRandomStats(seeder: Seeder): Record<Stat, number> {
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

export function getIQMod(country: Country, gen: Generation): number {
  const us = iq[Country.US]?.rel;
  if (country in iq) {
    if (gen === Generation.NONE) {
      return us;
    } else {
      const base = iq[country]?.rel ?? 1.0;
      const diff = base - us;
      return us + diff / gen;
    }
  }
  return 1.0;
}
