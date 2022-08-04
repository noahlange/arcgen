import { Country, Language } from '../origin';
import { ChristianTag, ReligionTag } from '../religion';

export const religions: {
  [key in Country]?: Partial<Record<ReligionTag, number>>;
} = {
  [Country.CN]: {
    [ReligionTag.NONE]: 0.75,
    [ReligionTag.BUDDHIST]: 0.16,
    [ReligionTag.ISLAMIC]: 0.015,
    [ReligionTag.CHRISTIAN]: 0.025,
    [ReligionTag.FOLK]: 0.075
  },
  [Country.US]: {
    [ReligionTag.NONE]: 0.5,
    [ReligionTag.CHRISTIAN]: 0.4,
    [ReligionTag.JEWISH]: 0.03,
    [ReligionTag.ISLAMIC]: 0.02,
    [ReligionTag.BUDDHIST]: 0.02,
    [ReligionTag.HINDU]: 0.01,
    [ReligionTag.SIKH]: 0.01,
    [ReligionTag.FOLK]: 0.01
  },
  [Country.ES]: {
    [ReligionTag.NONE]: 0.25,
    [ReligionTag.CHRISTIAN]: 0.65,
    [ReligionTag.ISLAMIC]: 0.1
  }
};

export const sects = {
  [Language.EN]: {
    [ReligionTag.CHRISTIAN]: {
      [ChristianTag.ORTHODOX]: 0.7,
      [ChristianTag.CHARISMATIC]: 8,
      [ChristianTag.FUNDIE]: 4,
      [ChristianTag.EVANGELICAL]: 20,
      [ChristianTag.NONTRINITARIAN]: 3.3,
      // wishful thinking: mainline Protestantism will return!
      [ChristianTag.MAINLINE]: 32,
      [ChristianTag.CATHOLIC]: 32
    }
  }
};
