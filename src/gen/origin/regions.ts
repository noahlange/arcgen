import type { Country } from './countries';

import { _ } from '../../utils';
import { Country as C } from './countries';

export enum Region {
  AMERICA_NORTH = 0,
  AMERICA_CENTRAL = 1,
  AMERICA_SOUTH = 2,
  AMERICA_CARIBBEAN = 3,
  EUROPE_WEST = 4,
  EUROPE_EAST = 5,
  EUROPE_SOUTH = 6,
  EUROPE_SOUTHEAST = 7,
  EUROPE_CENTRAL = 8,
  EUROPE_NORTH = 9,
  EUROPE_ANGLO = 10,
  AFRICA_NORTH = 11,
  AFRICA_SOUTH = 12,
  AFRICA_EAST = 13,
  AFRICA_WEST = 14,
  AFRICA_CENTRAL = 15,
  ASIA_CENTRAL = 16,
  ASIA_SOUTHEAST = 17,
  ASIA_JAPAN = 18,
  ASIA_KOREA = 19,
  ASIA_TAIWAN = 20,
  ASIA_CHINA = 21,
  ASIA_SOUTH = 22,
  ASIA_WEST = 23,
  ISRAEL = 24
}

export const regions: Record<Region, C[]> = {
  [Region.AMERICA_NORTH]: [C.CA, C.US],
  [Region.AMERICA_CENTRAL]: [C.CR, C.GT, C.HN, C.MX, C.PA, C.SV],
  [Region.AMERICA_CARIBBEAN]: [C.HT, C.JM, C.PR],
  [Region.AMERICA_SOUTH]: [C.AR, C.BO, C.BR, C.CL, C.CO, C.EC, C.PE, C.UY],
  [Region.EUROPE_WEST]: [C.BE, C.ES, C.FR, C.LU, C.PT],
  [Region.EUROPE_EAST]: [C.RU, C.GE],
  [Region.EUROPE_SOUTH]: [C.CY, C.GR, C.IT, C.MT],
  [Region.EUROPE_SOUTHEAST]: [C.AL, C.BG, C.HR, C.MD, C.RS, C.SI],
  [Region.EUROPE_CENTRAL]: [C.AT, C.CH, C.CZ, C.DE, C.HU, C.PL],
  [Region.EUROPE_NORTH]: [C.DK, C.EE, C.IS, C.LT, C.NL, C.NO, C.SE, C.FI],
  [Region.EUROPE_ANGLO]: [C.GB, C.IE, C.AU, C.NZ],
  [Region.AFRICA_NORTH]: [C.DZ, C.EG, C.SD, C.TN, C.MA, C.LY],
  [Region.AFRICA_SOUTH]: [C.BW, C.MU, C.NA, C.ZA],
  [Region.AFRICA_EAST]: [C.DJ, C.ET],
  [Region.AFRICA_WEST]: [C.BF, C.CM, C.NG, C.GH],
  [Region.AFRICA_CENTRAL]: [C.AO, C.BI],
  [Region.ISRAEL]: [C.IL],
  [Region.ASIA_CENTRAL]: [C.KZ, C.MV, C.TM],
  [Region.ASIA_SOUTHEAST]: [C.BN, C.ID, C.KH, C.MY, C.PH, C.PS, C.SG, C.FJ],
  [Region.ASIA_SOUTH]: [C.BD, C.IN],
  [Region.ASIA_JAPAN]: [C.JP],
  [Region.ASIA_KOREA]: [C.KR],
  [Region.ASIA_TAIWAN]: [C.TW],
  [Region.ASIA_CHINA]: [C.CN, C.HK, C.MO],
  [Region.ASIA_WEST]: [
    C.AF,
    C.AZ,
    C.AE,
    C.BH,
    C.SA,
    C.SY,
    C.IQ,
    C.IR,
    C.JO,
    C.KW,
    C.LB,
    C.OM,
    C.PS,
    C.TR,
    C.QA,
    C.YE
  ]
};

export function getCountryRegion(country: Country): Region | null {
  const things =
    _.keys(regions).find(region => regions[region].includes(country)) ?? null;
  return things === null ? null : +things;
}
