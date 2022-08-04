import type { Group } from '../groups/types';

// prettier-ignore
export enum ReligionTag {
  NONE      = 0, // e.g., non-practicing
  CHRISTIAN = 1,
  JEWISH    = 2,
  ISLAMIC   = 3,
  BUDDHIST  = 4,
  HINDU     = 5,
  SIKH      = 6,
  FOLK      = 7 // e.g., neo-paganism, syncretics
}

// prettier-ignore
export enum ChristianTag {
  ORTHODOX        = 0,  // e.g., Eastern Orthodox, Oriental Orthodox
  MAINLINE        = 1,  // e.g,, Lutheran, Anglican
  CATHOLIC        = 2,  // e.g., Roman Catholics
  CHARISMATIC     = 3,  // e.g., Pentecostals
  FUNDIE          = 4,  // e.g., independent baptists
  EVANGELICAL     = 5,  // e.g., SBC
  NONTRINITARIAN  = 6 // e.g. LDS, Jehovah's Witnesses
}

// prettier-ignore
export enum JewishTag {
  REFORM        = 0,
  ORTHODOX      = 1,
  HASIDIC       = 2,
  CONSERVATIVE  = 3
}

export interface Religion extends Group {
  religion: ReligionTag;
  sect: null | number;
}

export interface ChristianReligion extends Religion {
  religion: ReligionTag.CHRISTIAN;
  sect: ChristianTag;
}

export interface JewishReligion extends Religion {
  religion: ReligionTag.JEWISH;
  sect: JewishTag;
}
