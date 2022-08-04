import type { Seeder } from '../../lib/Seeder';

import { _, RNG } from '../../utils';
import { Country, Generation, getCountryRegion, Region } from '../origin';
import {
  getAuxiliaryLanguages,
  getCountryLanguage,
  getRegionalLanguages,
  Language
} from '../origin/languages';

export interface CultureData {
  gen: Generation;
  origin: Region;
  country: Country;
  languages: Language[];
}

const countries = _.keys(Country).filter(c => c !== Country.US) as Country[];
const auxLanguages = getAuxiliaryLanguages().filter(l => l !== Language.EN);

export function getCultureData(seeder: Seeder): CultureData {
  const { rng } = seeder.use('culture');

  const languages = [Language.EN];
  const gen = Math.round(Math.max(0, 3 - rng.quick() * 5)) || Generation.NONE;
  const country = RNG.pick(rng.quick, countries);
  const origin = getCountryRegion(country);
  const lang = getCountryLanguage(country) ?? Language.EN;

  switch (gen) {
    case Generation.NONE: {
      const isBilingual = rng.quick() < 0.25;
      if (isBilingual) {
        languages.push(RNG.pick(seeder.rng, auxLanguages));
      }
      break;
    }
    case Generation.FIRST: {
      languages.push(lang);
      const speaksEn = rng.quick() > 0.625;
      if (!speaksEn) {
        languages.shift();
        // give them a regional language
        if (origin) {
          const regional = getRegionalLanguages(origin);
          languages.push(RNG.pick(seeder.rng, regional));
        }
      }
      break;
    }
    case Generation.SECOND: {
      languages.push(lang);
      break;
    }
    case Generation.THIRD: {
      const isBilingual = rng.quick() < 0.375;
      if (isBilingual) {
        languages.push(lang);
      }
      break;
    }
  }

  return {
    origin: origin ?? Region.AMERICA_NORTH,
    gen,
    country,
    languages: [Language.EN]
  };
}
