import { Country, Origin, getCountryOrigin, Generation } from '../origin';
import { Seeder } from '../../lib/Seeder';
import { RNG, _ } from '../../utils';
import { getCountryLanguage, Language } from '../origin/languages';

export interface CultureData {
  gen: Generation;
  origin: Origin;
  country: Country;
  languages: Language[];
}

const countryList = _.keys(Country)
  .filter(key => !isFinite(+key))
  .filter(val => val !== Country.US) as Country[];

export function getCultureData(seeder: Seeder): CultureData {
  const { rng } = seeder.use('culture');

  let gen = Math.round(rng.quick() * 3);
  gen = gen > Generation.THIRD ? Generation.NONE : gen;

  if (gen !== Generation.NONE) {
    const languages: Language[] = [];
    const country = RNG.pick(rng.quick, countryList);

    if (country !== Country.US) {
      const origin = getCountryOrigin(country);
      const lang = getCountryLanguage(country) as Language | null;

      if (origin && lang !== null) {
        if (lang !== Language.EN) {
          switch (gen) {
            case Generation.FIRST: {
              // @todo: determine if they get extra local languages
              const speaksEn = rng.quick() > 0.625;
              languages.push(lang);
              if (speaksEn) {
                languages.push(Language.EN);
              }
              break;
            }
            case Generation.SECOND: {
              languages.push(Language.EN, lang);
              break;
            }
            case Generation.THIRD: {
              const isBilingual = rng.quick() < 0.375;
              languages.push(Language.EN);
              if (isBilingual) {
                languages.push(lang);
              }
              break;
            }
            default: {
              languages.push(Language.EN);
              break;
            }
          }
        } else {
          languages.push(Language.EN);
        }

        return {
          origin,
          gen,
          country,
          languages: Array.from(new Set(languages))
        };
      }
    }
  }

  return {
    origin: Origin.AMERICA_NORTH,
    gen,
    country: Country.US,
    languages: [Language.EN]
  };
}
