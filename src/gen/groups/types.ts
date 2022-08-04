// prettier-ignore
export enum GroupType {
  CORP      = 0,
  COMMERCE  = 1,
  SERVICES  = 2,
  GOV       = 3,
  CRIME     = 4,
  SOCIAL    = 5,
  RELIGIOUS = 6
}

// prettier-ignore
export enum GroupTag {
  WEALTHY = 0,   // e.g., the LDS Church
  ETHNIC  = 1,   // e.g., the Sicilian Mafia
  VIOLENT = 2,   // e.g., MS-13
  COVERT  = 3,   // e.g., Mossad
  INSULAR = 4,   // e.g., the Illuminati
  NOTABLE = 5,   // e.g., Walmart
  FRONT   = 6,   // e.g., Los Pollos Hermanos
  LOCAL   = 7    // e.g., union chapter
}

// prettier-ignore
export enum CorpTag {
  GOODS     = 0,
  COMMERCE  = 1,
  UTILITY   = 2,
  SECURITY  = 3,
  TECH      = 4,
  HACK      = 5,
  INTEL     = 6,
  ARMS      = 7,
  PHARMA    = 8
}

// prettier-ignore
export enum CrimeTag {
  DRUGS       = 1,
  THEFT       = 2,
  ARMS        = 3,
  SERVICES    = 4,
  GAMBLING    = 5,
  SMUGGLING   = 6,
  TRAFFICKING = 7,
  CORRPUTION  = 8,
  HACKING     = 9
}

// prettier-ignore
export enum Ideology {
  CAPITALIST        = 0,
  NEOLIBERAL        = 1,
  COMMUNIST         = 2,
  SOCIALIST         = 3,
  CONSERVATIVE      = 4,
  PROGRESSIVE       = 5,
  CENTRIST          = 6,
  AUTHORITARIAN     = 7,
  LIBERTARIAN       = 8,
  THEOCRATIC        = 9,
  ENVIRONMENTALIST  = 10
}

export interface Group {
  seed: string;
  type: GroupType;
  tags: GroupTag[];
}

export interface Politic extends Group {
  ideology: Ideology[];
}
