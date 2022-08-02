import { Seeder } from '../../lib';
import { ChristianTag, JewishTag, ReligionTag } from './types';
import { PersonData } from '../people/types';
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
