import type { CultureData } from './getCultureData';
import type { PersonData } from './types';
import type { EntityId } from '@reduxjs/toolkit';

import { Seeder } from '@/lib';

import { DATE } from '..';
import { getName } from '../names';
import { getCultureData } from './getCultureData';
import { getGender, getSexuality } from './getGender';

// prettier-ignore
const cohorts = [
  [14, 0.15], 
  [18, 0.2],  
  [24, 0.3],  
  [34, 0.45], 
  [54, 0.7],  
  [74, 0.85], 
  [94, 0.95], 
  [120, 1]    
];

const cohortTable: Record<number, number> = {
  14: 0.15, //   –15 = 15%
  18: 0.05, // 15–18 = 5%
  24: 0.1, // 19–24 = 10%
  34: 0.15, // 25–34 = 15%
  54: 0.15, // 35–54 = 25%
  74: 0.25, // 54–74 = 15%
  94: 0.1, // 75–95 = 10%
  120: 0.05 // 95–   = 5%
};

export function getPersonData(
  seed: string,
  data: { id: EntityId; age: number } & Partial<PersonData>
): PersonData {
  const seeder = new Seeder(seed);
  const age = Math.floor(data.age);
  const dob = DATE.minus({ years: data.age }).toString();

  const culture =
    data.languages && data.gen && data.country
      ? (data as unknown as CultureData)
      : getCultureData(seeder);

  const { languages, gen, country } = culture;
  const gender = data.gender ?? getGender(seeder);
  const name = data.name ?? getName(seeder, gender, gen, country);
  const sexuality = data.sexuality ?? getSexuality(seeder, gender);

  return {
    id: data.id,
    seed: seeder.value,
    name,
    age,
    date_of_birth: dob,
    gender,
    sexuality,
    country,
    languages,
    gen
  };
}
