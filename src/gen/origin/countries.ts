export enum Country {
  AE = 'AE',
  AF = 'AF',
  AL = 'AL',
  AO = 'AO',
  AU = 'AU',
  AR = 'AR',
  AT = 'AT',
  AZ = 'AZ',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BN = 'BN',
  BO = 'BO',
  BR = 'BR',
  BW = 'BW',
  CA = 'CA',
  CH = 'CH',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FR = 'FR',
  GB = 'GB',
  GE = 'GE',
  GH = 'GH',
  GR = 'GR',
  GT = 'GT',
  HK = 'HK',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IN = 'IN',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KH = 'KH',
  KR = 'KR',
  KW = 'KW',
  KZ = 'KZ',
  LB = 'LB',
  LT = 'LT',
  LU = 'LU',
  LY = 'LY',
  MA = 'MA',
  MD = 'MD',
  MO = 'MO',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MX = 'MX',
  MY = 'MY',
  NA = 'NA',
  NG = 'NG',
  NL = 'NL',
  NO = 'NO',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PH = 'PH',
  PL = 'PL',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  QA = 'QA',
  RS = 'RS',
  RU = 'RU',
  SA = 'SA',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SI = 'SI',
  SV = 'SV',
  SY = 'SY',
  TM = 'TM',
  TN = 'TN',
  TR = 'TR',
  TW = 'TW',
  US = 'US',
  UY = 'UY',
  YE = 'YE',
  ZA = 'ZA'
}

/**
 * Additional languages that need to be added.
 * - azerbaijani
 * - bengali
 * - berber
 * - bulgarian
 * - estonian
 * - afar
 * - fijin
 * - georgian
 * - hungarian
 * - khmer
 * - kazakh
 * - lithuanian
 * - maltese
 * - dhivehi
 * - oshiwambo
 * - filipino
 * - slovene
 * - turkmen
 */
export const names: Record<Country, string> = {
  [Country.AE]: 'United Arab Emirates',
  [Country.AF]: 'Afghanistan',
  [Country.AL]: 'Albania',
  [Country.AU]: 'Australia',
  [Country.AO]: 'Angola',
  [Country.AR]: 'Argentina',
  [Country.AT]: 'Austria',
  [Country.AZ]: 'Azerbaijan',
  [Country.BD]: 'Bangladesh',
  [Country.BE]: 'Belgium',
  [Country.BF]: 'Burkina Faso',
  [Country.BG]: 'Bulgaria',
  [Country.BH]: 'Bahrain',
  [Country.BI]: 'Burundi',
  [Country.BN]: 'Brunei',
  [Country.BO]: 'Bolivia',
  [Country.BR]: 'Brazil',
  [Country.BW]: 'Botswana',
  [Country.CA]: 'Canada',
  [Country.CH]: 'Switzerland',
  [Country.CL]: 'Chile',
  [Country.CM]: 'Cameroon',
  [Country.CN]: 'China',
  [Country.CO]: 'Colombia',
  [Country.CR]: 'Costa Rica',
  [Country.CY]: 'Cyprus',
  [Country.CZ]: 'Czechia',
  [Country.DE]: 'Germany',
  [Country.DJ]: 'Djibouti',
  [Country.DK]: 'Denmark',
  [Country.DZ]: 'Algeria',
  [Country.EC]: 'Ecuador',
  [Country.EE]: 'Estonia',
  [Country.EG]: 'Egypt',
  [Country.ES]: 'Spain',
  [Country.ET]: 'Ethiopia',
  [Country.FI]: 'Finland',
  [Country.FJ]: 'Fiji',
  [Country.FR]: 'France',
  [Country.GB]: 'United Kingdom',
  [Country.GE]: 'Georgia',
  [Country.GH]: 'Ghana',
  [Country.GR]: 'Greece',
  [Country.GT]: 'Guatemala',
  [Country.HK]: 'Hong Kong',
  [Country.HN]: 'Honduras',
  [Country.HR]: 'Croatia',
  [Country.HT]: 'Haiti',
  [Country.HU]: 'Hungary',
  [Country.ID]: 'Indonesia',
  [Country.IE]: 'Ireland',
  [Country.IL]: 'Israel',
  [Country.IN]: 'India',
  [Country.IQ]: 'Iraq',
  [Country.IR]: 'Iran',
  [Country.IS]: 'Iceland',
  [Country.IT]: 'Italy',
  [Country.JM]: 'Jamaica',
  [Country.JO]: 'Jordan',
  [Country.JP]: 'Japan',
  [Country.KH]: 'Cambodia',
  [Country.KR]: 'Korea',
  [Country.KW]: 'Kuwait',
  [Country.KZ]: 'Kazakhstan',
  [Country.LB]: 'Lebanon',
  [Country.LT]: 'Lithuania',
  [Country.LU]: 'Luxemborg',
  [Country.LY]: 'Libya',
  [Country.MA]: 'Morocco',
  [Country.MD]: 'Moldova',
  [Country.MO]: 'Macao',
  [Country.MT]: 'Malta',
  [Country.MU]: 'Mauritius',
  [Country.MV]: 'Maldives',
  [Country.MX]: 'Mexico',
  [Country.MY]: 'Malaysia',
  [Country.NA]: 'Namibia',
  [Country.NG]: 'Nigeria',
  [Country.NL]: 'Netherlands',
  [Country.NZ]: 'New Zealand',
  [Country.NO]: 'Norway',
  [Country.OM]: 'Oman',
  [Country.PA]: 'Panama',
  [Country.PE]: 'Peru',
  [Country.PH]: 'Philippines',
  [Country.PL]: 'Poland',
  [Country.PR]: 'Puerto Rico',
  [Country.PS]: 'Palestine',
  [Country.PT]: 'Portugal',
  [Country.QA]: 'Qatar',
  [Country.RS]: 'Serbia',
  [Country.RU]: 'Russia',
  [Country.SA]: 'Saudi Arabia',
  [Country.SD]: 'Sudan',
  [Country.SE]: 'Sweden',
  [Country.SG]: 'Singapore',
  [Country.SI]: 'Slovenia', // slovene
  [Country.SV]: 'El Salvador',
  [Country.SY]: 'Syria',
  [Country.TM]: 'Turkmenistan', // turkmen
  [Country.TN]: 'Tunisia',
  [Country.TR]: 'Turkey',
  [Country.TW]: 'Taiwan',
  [Country.US]: 'United States',
  [Country.UY]: 'Uruguay',
  [Country.YE]: 'Yemen',
  [Country.ZA]: 'South Africa'
};
