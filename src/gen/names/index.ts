import type { Seeder } from '../../lib';

import { _, RNG } from '../../utils';
import { Country } from '../origin';
import { Gender } from '../people';
import firstNames from './name_first.json';
import lastNames from './name_last.json';

const aliases: { [K in Country]?: Country } = {
  [Country.NZ]: Country.GB,
  [Country.AU]: Country.GB
};

function getValidNames(
  names: Record<string, any>,
  country: Country,
  gender?: Gender
): string[] {
  return _.keys(names)
    .filter(name => country in names[name].rank)
    .filter(name => {
      const g = Gender[gender!];
      const gendered = names[name].gender as Record<string, number>;
      if (!gendered) {
        return true;
      }
      return g in gendered ? gendered[g] > 0.25 : false;
    });
}

export function getName(
  seeder: Seeder,
  gender: Gender,
  country: Country
): string[] {
  const { rng } = seeder.use('name');
  const aliased = aliases[country] ?? country;

  const givenName = RNG.pick(
    rng.quick,
    getValidNames(firstNames, aliased, gender)
  );

  const surname = RNG.pick(rng.quick, getValidNames(lastNames, aliased));

  return [givenName, surname];
}
