import type { Region } from './regions';

import { _ } from '../../utils';
import { Country } from './countries';
import { regions } from './regions';

/**
 * A weird mix of languages, primarily drawn from frequency in online content,
 * but also related to the countries represented in the name dataset. Languages
 * that still need names: Vietnamese, Urdu, Slovak, Thai.
 */
export enum Language {
  AA = 'AA', // afar
  AF = 'AF', // afrikaans,
  AR = 'AR', // arabic
  AZ = 'AZ', // azeri
  BG = 'BG', // bulgarian
  BN = 'BN', // bengali
  CZ = 'CZ', // czech
  DA = 'DA', // danish
  DE = 'DE', // german
  DV = 'DV', // dhivehi
  EL = 'EL', // greek
  EN = 'EN', // english
  ES = 'ES', // spanish
  ET = 'ET', // estonian
  FA = 'FA', // farsi
  FI = 'FI', // finnish
  FJ = 'FJ', // fijian
  FR = 'FR', // french
  HE = 'HE', // hebrew
  HI = 'HI', // hindi
  HU = 'HU', // hungarian
  IS = 'IS', // icelandic
  IT = 'IT', // italian
  JA = 'JA', // japanese
  KA = 'KA', // georgian (kartuli)
  KH = 'KH', // khmer
  KJ = 'KJ', // kwanyama,
  KO = 'KO', // korean
  KK = 'KK', // kazakh
  LT = 'LT', // lithuanian
  MS = 'MS', // indonesian
  MT = 'MT', // maltese
  NG = 'NG', // ndonga
  NL = 'NL', // dutch
  NO = 'NO', // norwegian
  PL = 'PL', // polish
  PT = 'PT', // portuguese,
  RO = 'RO', // romanian
  RU = 'RU', // russian
  SH = 'SH', // serbo-croatian
  SK = 'SK', // slovak,
  SL = 'SL', // slovene
  SV = 'SV', // swedish
  SW = 'SW', // swahili,
  TH = 'TH', // thai
  TK = 'TK', // turkmen
  TL = 'TL', // filipino
  TR = 'TR', // turkish
  UR = 'UR', // urdu
  VT = 'VT', // vietnamese
  ZH = 'ZH' // chinese
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
  [Language.IS]: 'Icelandic',
  [Language.LT]: 'Lithuanian',
  [Language.KK]: 'Kazakh',
  [Language.BG]: 'Bulgarian',
  [Language.FJ]: 'Fijian',
  [Language.SL]: 'Slovenian',
  [Language.AZ]: 'Azeri',
  [Language.TK]: 'Turkmen',
  [Language.TL]: 'Tagalog',
  [Language.KH]: 'Khmer',
  [Language.AA]: 'Afar',
  [Language.BN]: 'Bengali',
  [Language.KA]: 'Georgian',
  [Language.DV]: 'Dhivehi',
  [Language.ET]: 'Estonian',
  [Language.MT]: 'Maltese',
  [Language.KJ]: 'Kwanyama',
  [Language.NG]: 'Ndonga',
  [Language.SW]: 'Swahili'
};

const countriesByLang: Record<Language, Country[]> = {
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
    Country.YE,
    Country.SY
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
    Country.PE,
    Country.PA
  ],
  [Language.EN]: [
    Country.IE,
    Country.GB,
    Country.US,
    Country.CA,
    Country.NZ,
    Country.AU,
    Country.BW,
    Country.GH,
    Country.IN,
    Country.JM,
    Country.MT,
    Country.MU,
    Country.MV,
    Country.NG,
    Country.ZA
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
  [Language.DE]: [Country.DE, Country.AT, Country.CH, Country.BE, Country.LU],
  [Language.ZH]: [Country.CN, Country.TW, Country.HK, Country.MO],
  [Language.MS]: [Country.ID, Country.MY, Country.BN, Country.SG],
  [Language.PT]: [Country.PT, Country.AO, Country.BR],
  [Language.AF]: [Country.ZA, Country.NA],
  [Language.FA]: [Country.IR, Country.AF],
  [Language.SH]: [Country.RS, Country.HR],
  [Language.EL]: [Country.GR, Country.CY],
  [Language.TR]: [Country.TR, Country.CY],
  [Language.DA]: [Country.DK],
  [Language.NL]: [Country.NL],
  [Language.RU]: [Country.RU],
  [Language.CZ]: [Country.CZ],
  [Language.IT]: [Country.IT],
  [Language.FI]: [Country.FI],
  [Language.HE]: [Country.IL],
  [Language.PL]: [Country.PL],
  [Language.NO]: [Country.NO],
  [Language.SV]: [Country.SE],
  [Language.HU]: [Country.HU],
  [Language.JA]: [Country.JP],
  [Language.KO]: [Country.KR],
  [Language.IS]: [Country.IS],
  [Language.KA]: [Country.GE],
  [Language.HI]: [Country.IN],
  [Language.RO]: [Country.MD],
  [Language.LT]: [Country.LT],
  [Language.KK]: [Country.KZ],
  [Language.BG]: [Country.BG],
  [Language.SL]: [Country.SI],
  [Language.FJ]: [Country.FJ],
  [Language.AZ]: [Country.AZ],
  [Language.TK]: [Country.TM],
  [Language.TL]: [Country.PH],
  [Language.KH]: [Country.KH],
  [Language.AA]: [Country.ET],
  [Language.BN]: [Country.BD],
  [Language.DV]: [Country.MV],
  [Language.SK]: [Country.SK],
  [Language.DV]: [Country.MA],
  [Language.ET]: [Country.ET],
  [Language.MT]: [Country.MT],
  [Language.KJ]: [Country.NA],
  [Language.NG]: [Country.NA],
  [Language.VT]: [],
  [Language.UR]: [],
  [Language.TH]: [],
  [Language.SW]: []
};

export function getCountryLanguage(country: Country): Language | null {
  return (
    _.keys(countriesByLang).find(lang =>
      countriesByLang[lang].includes(country)
    ) ?? null
  );
}

export function getRegionalLanguages(region: Region): Language[] {
  const countries = regions[region];
  return _.entries(countriesByLang)
    .filter(([, value]) => countries.some(country => value.includes(country)))
    .map(([key]) => key);
}

export function getAuxiliaryLanguages(): Language[] {
  return [Language.EN, Language.ES, Language.FR, Language.DE];
}
