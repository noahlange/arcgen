import type { PersonData } from './types';

import { Seeder } from '../../lib/Seeder';
import { getBetween } from '../../utils/rng';
import { getSmudger } from '../../utils/smudge';
import { DATE } from '../';
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
  data: Pick<PersonData, 'id' | 'age'>
): PersonData {
  const seeder = new Seeder(seed);
  const age = Math.floor(data.age);
  const dob = DATE.minus({ years: data.age }).toString();
  const { country, languages, gen } = getCultureData(seeder);

  const gender = getGender(seeder);
  const sexuality = getSexuality(seeder, gender);
  const name = getName(seeder, gender, country);

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

export function getPeople(
  seeder: Seeder,
  count: number
): Pick<PersonData, 'id' | 'age'>[] {
  const id = seeder.nextID.bind(seeder);
  const smudger = getSmudger(seeder.rng);
  const between = getBetween(seeder.rng);
  const pcts = cohorts.map(i => i[1]);
  const smudged = smudger(pcts, 0.1);
  const data = [];

  let [index, min] = [0, 0];
  while (cohorts[index] && data.length < count) {
    const max = cohorts[index][0];
    const pct = smudged[index];
    const age = between(min, max);
    data.push({ id: id(), age });
    if (data.length / count > pct) {
      min = max;
      index++;
    }
  }

  return data;
}
