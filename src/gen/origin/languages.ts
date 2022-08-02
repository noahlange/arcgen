import { _ } from '../../utils';
import { Country } from './countries';

/**
 * A weird mix of languages, primarily drawn from frequency in online content,
 * but also related to the countries represented in the name dataset. Languages
 * that still need names: Vietnamese, Urdu, Slovak, Thai.
 */
export enum Language {
  EN, // english
  ES, // spanish
  RU, // russian
  FA, // farsi
  DE, // german
  FR, // french
  JA, // japanese
  ZH, // chinese
  AR, // arabic
  NL, // dutch
  CZ, // czech
  SV, // swedish
  DA, // danish
  HI, // hindi
  NO, // norwegian
  SH, // serbo-croatian
  PL, // polish
  KO, // korean
  TR, // turkish
  VT, // vietnamese
  MS, // indonesian
  IT, // italian
  TH, // thai
  HE, // hebrew
  EL, // greek
  RO, // romanian
  HU, // hungarian
  FI, // finnish
  SK, // slovak,
  UR, // urdu
  PT, // portuguese,
  AF, // afrikaans,
  IS // icelandic
}

export const names: Record<Language, string> = {
  [Language.EN]: 'English',
  [Language.ES]: 'Spanish',
  [Language.RU]: 'Russian',
  [Language.FA]: 'Farsi',
  [Language.DE]: 'German',
  [Language.FR]: 'French',
  [Language.JA]: 'Japanese',
  [Language.ZH]: 'Chinese',
  [Language.AR]: 'Arabic',
  [Language.NL]: 'Dutch',
  [Language.CZ]: 'Czech',
  [Language.SV]: 'Swedish',
  [Language.DA]: 'Danish',
  [Language.HI]: 'Hindi',
  [Language.NO]: 'Norwegian',
  [Language.SH]: 'Serbo-Croatian',
  [Language.PL]: 'Polish',
  [Language.KO]: 'Korean',
  [Language.TR]: 'Turkish',
  [Language.VT]: 'Vietnamese',
  [Language.MS]: 'Malay',
  [Language.IT]: 'Italian',
  [Language.TH]: 'Thai',
  [Language.HE]: 'Hebrew',
  [Language.EL]: 'Greek',
  [Language.RO]: 'Romanian',
  [Language.HU]: 'Hungarian',
  [Language.FI]: 'Finnish',
  [Language.SK]: 'Slovak',
  [Language.UR]: 'Urdu',
  [Language.PT]: 'Portuguese',
  [Language.AF]: 'Afrikaans',
  [Language.IS]: 'Icelandic'
};

const countriesByLang: Record<Language, Country[]> = {
  [Language.EN]: [
    Country.IE,
    Country.GB,
    Country.US,
    Country.CA,
    Country.NZ,
    Country.AU,
    Country.BW,
    Country.FI,
    Country.GH,
    Country.IN,
    Country.JM,
    Country.MT,
    Country.MU,
    Country.MV,
    Country.NG,
    Country.ZA
  ],
  [Language.ES]: [
    Country.AR,
    Country.BO,
    Country.CO,
    Country.CL,
    Country.CR,
    Country.EC,
    Country.ES,
    Country.GT,
    Country.MX,
    Country.PR,
    Country.SV,
    Country.UY,
    Country.HN,
    Country.PE
  ],
  [Language.FR]: [
    Country.BE,
    Country.BF,
    Country.FR,
    Country.CH,
    Country.CM,
    Country.DJ,
    Country.DZ,
    Country.HT,
    Country.LB,
    Country.MU
  ],
  [Language.DA]: [Country.DK],
  [Language.NL]: [Country.NL],
  [Language.DE]: [Country.DE, Country.AT, Country.CH, Country.BE, Country.LU],
  [Language.EL]: [Country.GR, Country.CY],
  [Language.TR]: [Country.TR, Country.CY],
  [Language.RU]: [Country.RU],
  [Language.ZH]: [Country.CN, Country.TW, Country.HK, Country.MO],
  [Language.FA]: [Country.IR, Country.AF],
  [Language.CZ]: [Country.CZ],
  [Language.IT]: [Country.IT],
  [Language.FI]: [Country.FI],
  [Language.HE]: [Country.IL],
  [Language.PL]: [Country.PL],
  [Language.NO]: [Country.NO],
  [Language.SV]: [Country.SE],
  [Language.HU]: [Country.HU],
  [Language.SH]: [Country.RS, Country.HR],
  [Language.JA]: [Country.JP],
  [Language.KO]: [Country.KR],
  [Language.IS]: [Country.IS],
  [Language.AR]: [
    Country.LB,
    Country.AE,
    Country.AF,
    Country.BH,
    Country.DJ,
    Country.DZ,
    Country.EG,
    Country.IQ,
    Country.JO,
    Country.KW,
    Country.LY,
    Country.MA,
    Country.OM,
    Country.PS,
    Country.QA,
    Country.SA,
    Country.SD,
    Country.TN,
    Country.YE
  ],
  [Language.PT]: [Country.PT, Country.AO, Country.BR],
  [Language.HI]: [Country.IN],
  [Language.RO]: [Country.MD],
  [Language.AF]: [Country.ZA, Country.NA],
  [Language.MS]: [Country.ID, Country.MY, Country.BN, Country.SG],
  [Language.VT]: [],
  [Language.UR]: [],
  [Language.SK]: [],
  [Language.TH]: []
};

export function getCountryLanguage(country: Country): Language | null {
  const lang = _.keys(countriesByLang).find(lang =>
    countriesByLang[lang].includes(country)
  );
  return lang && isFinite(+lang) ? +lang : null;
}
