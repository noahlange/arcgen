export enum GroupType {
  CORP,
  COMMERCE,
  SERVICES,
  GOV,
  CRIME,
  SOCIAL,
  RELIGIOUS
}

export enum GroupTag {
  WEALTHY,
  ETHNIC,
  VIOLENT,
  COVERT,
  INSULAR,
  NOTABLE,
  FRONT,
  LOCAL
}

export enum CorpTag {
  GOODS,
  COMMERCE,
  UTILITY,
  SECURITY,
  TECH,
  HACK,
  INTEL,
  ARMS,
  PHARMA
}

export enum CrimeTag {
  DRUGS,
  THEFT,
  ARMS,
  SERVICES,
  GAMBLING,
  SMUGGLING,
  TRAFFICKING,
  CORRPUTION,
  HACKING
}

export enum Ideology {
  CAPITALIST = 0,
  NEOLIBERAL = 1,
  COMMUNIST = 2,
  SOCIALIST = 3,
  CONSERVATIVE = 4,
  PROGRESSIVE = 5,
  CENTRIST = 6,
  AUTHORITARIAN = 7,
  LIBERTARIAN = 8,
  THEOCRATIC = 9,
  ENVIRONMENTALIST = 10
}

export interface Group {
  seed: string;
  type: GroupType;
  tags: GroupTag[];
}

export interface Politic extends Group {
  ideology: Ideology[];
}
