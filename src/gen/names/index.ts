import { Seeder } from '../../lib';
import { Country } from '../origin';
import { Gender } from '../people';
import { RNG, _ } from '../../utils';

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
) {
  return _.keys(names)
    .filter(name => country in names[name].rank)
    .filter(name => {
      if (!gender) {
        return true;
      }
      const g = Gender[gender];
      const gendered = names[name].gender as Record<string, number>;
      return g in gendered ? gendered[g] > 0.25 : false;
    })
    .map(name => names[name]);
}

export function getName(
  seeder: Seeder,
  gender: Gender,
  country: Country
): string[] {
  const { rng } = seeder.use('name');
  const aliased = aliases[country] ?? country;

  let givenName = RNG.pick(
    rng.quick,
    getValidNames(firstNames, aliased, gender)
  );

  let surname = RNG.pick(rng.quick, getValidNames(lastNames, aliased));

  return [givenName, surname];
}
