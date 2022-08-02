import { Seeder } from '../../lib/Seeder';
import { percentTable } from '../../utils';
import { ChristianTag, JewishTag, ReligionTag } from '../religion';
import { Country } from '../origin';

import { religions } from './distribution';

export function getReligion(seed: Seeder, country: Country): ReligionTag {
  const { rng } = seed.use('religion');
  const rand = rng.quick();
  const table = religions[country] as Record<ReligionTag, number>;

  return (
    (table !== undefined
      ? percentTable(table, rand)
      : percentTable(table, rand)) ?? ReligionTag.NONE
  );
}

export function getSect(
  seed: Seeder,
  religion: ReligionTag
): ChristianTag | JewishTag | null {
  switch (religion) {
    case ReligionTag.CHRISTIAN: {
      return getChristianSect(seed);
    }
    case ReligionTag.JEWISH: {
      return JewishTag.REFORM;
    }
    default: {
      return null;
    }
  }
}

export function getChristianSect(seed: Seeder): ChristianTag {
  return percentTable(
    {
      [ChristianTag.ORTHODOX]: 0.7,
      [ChristianTag.CHARISMATIC]: 8,
      [ChristianTag.FUNDIE]: 4,
      [ChristianTag.EVANGELICAL]: 20,
      [ChristianTag.NONTRINITARIAN]: 3.3,
      // wishful thinking: mainline Protestantism will return!
      [ChristianTag.MAINLINE]: 32,
      [ChristianTag.CATHOLIC]: 32
    },
    seed.use('sect').rng() * 100
  );
}
