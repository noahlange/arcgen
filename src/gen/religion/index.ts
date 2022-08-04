import type { Seeder } from '../../lib';
import type { PersonData } from '../people/types';
import type { ChristianTag, JewishTag, ReligionTag } from './types';

import { getReligion, getSect } from './getReligion';

export interface ReligionData {
  religion: ReligionTag;
  sect: ChristianTag | JewishTag | null;
}

export function getReligionData(
  seeder: Seeder,
  data: PersonData
): ReligionData {
  const religion = getReligion(seeder, data.country);
  const sect = getSect(seeder, religion);
  return { religion, sect };
}

export * from './types';
