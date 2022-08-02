import { Group } from '../groups/types';

export enum ReligionTag {
  NONE, // e.g., non-practicing
  CHRISTIAN,
  JEWISH,
  ISLAMIC,
  BUDDHIST,
  HINDU,
  SIKH,
  FOLK // e.g., neo-paganism, syncretics
}

export enum ChristianTag {
  ORTHODOX,
  MAINLINE,
  CATHOLIC,
  CHARISMATIC,
  FUNDIE,
  EVANGELICAL,
  NONTRINITARIAN // e.g. LDS, Jehovah's Witnesses
}

export enum JewishTag {
  REFORM,
  ORTHODOX,
  HASIDIC,
  CONSERVATIVE
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
