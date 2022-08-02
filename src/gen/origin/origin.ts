import { Country as C, Country } from './countries';
import { _ } from '../../utils';

export enum Origin {
  AMERICA_NORTH,
  AMERICA_CENTRAL,
  AMERICA_SOUTH,
  AMERICA_CARIBBEAN,
  EUROPE_WEST,
  EUROPE_EAST,
  EUROPE_SOUTH,
  EUROPE_SOUTHEAST,
  EUROPE_CENTRAL,
  EUROPE_NORTH,
  EUROPE_ANGLO,
  AFRICA_NORTH,
  AFRICA_SOUTH,
  AFRICA_EAST,
  AFRICA_WEST,
  AFRICA_CENTRAL,
  ASIA_CENTRAL,
  ASIA_SOUTHEAST,
  ASIA_JAPAN,
  ASIA_KOREA,
  ASIA_TAIWAN,
  ASIA_CHINA,
  ASIA_SOUTH,
  ASIA_WEST,
  ISRAEL
}

export const regions: Record<Origin, C[]> = {
  [Origin.AMERICA_NORTH]: [C.CA, C.US],
  [Origin.AMERICA_CENTRAL]: [C.CR, C.GT, C.HN, C.MX, C.PA, C.SV],
  [Origin.AMERICA_CARIBBEAN]: [C.HT, C.JM, C.PR],
  [Origin.AMERICA_SOUTH]: [C.AR, C.BO, C.BR, C.CL, C.CO, C.EC, C.PE, C.UY],
  [Origin.EUROPE_WEST]: [C.BE, C.ES, C.FR, C.LU, C.PT],
  [Origin.EUROPE_EAST]: [C.RU, C.GE],
  [Origin.EUROPE_SOUTH]: [C.CY, C.GR, C.IT, C.MT],
  [Origin.EUROPE_SOUTHEAST]: [C.AL, C.BG, C.HR, C.MD, C.RS, C.SI],
  [Origin.EUROPE_CENTRAL]: [C.AT, C.CH, C.CZ, C.DE, C.HU, C.PL],
  [Origin.EUROPE_NORTH]: [C.DK, C.EE, C.IS, C.LT, C.NL, C.NO, C.SE, C.FI],
  [Origin.EUROPE_ANGLO]: [C.GB, C.IE, C.AU, C.NZ],
  [Origin.AFRICA_NORTH]: [C.DZ, C.EG, C.SD, C.TN, C.MA, C.LY],
  [Origin.AFRICA_SOUTH]: [C.BW, C.MU, C.NA, C.ZA],
  [Origin.AFRICA_EAST]: [C.DJ, C.ET],
  [Origin.AFRICA_WEST]: [C.BF, C.CM, C.NG, C.GH],
  [Origin.AFRICA_CENTRAL]: [C.AO, C.BI],
  [Origin.ISRAEL]: [C.IL],
  [Origin.ASIA_CENTRAL]: [C.KZ, C.MV, C.TM],
  [Origin.ASIA_SOUTHEAST]: [C.BN, C.ID, C.KH, C.MY, C.PH, C.PS, C.SG, C.FJ],
  [Origin.ASIA_SOUTH]: [C.BD, C.IN],
  [Origin.ASIA_JAPAN]: [C.JP],
  [Origin.ASIA_KOREA]: [C.KR],
  [Origin.ASIA_TAIWAN]: [C.TW],
  [Origin.ASIA_CHINA]: [C.CN, C.HK, C.MO],
  [Origin.ASIA_WEST]: [
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

export function getCountryOrigin(country: Country): Origin | null {
  return (
    _.keys(regions).find(region => regions[region].includes(country)) ?? null
  );
}
