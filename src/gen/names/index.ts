import type { Generation } from '@/gen/origin';
import type { Seeder } from '@/lib';

import firstNames from '@/data/name_first.json';
import lastNames from '@/data/name_last.json';
import { Country } from '@/gen/origin';
import { Gender } from '@/gen/people';
import { _, RNG } from '@/utils';

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
  gen: Generation,
  country: Country
): string[] {
  const { rng } = seeder.use('name');

  const [first, last] = [rng.quick(), rng.quick()];
  const useUSName = Math.max(0, gen - 1) * rng.quick() > 1;
  const aliased = aliases[country] || country;

  return [
    RNG.pick(
      () => first,
      getValidNames(firstNames, useUSName ? Country.US : aliased, gender)
    ),
    RNG.pick(() => last, getValidNames(lastNames, aliased))
  ];
}
