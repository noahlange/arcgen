import type { Country, Language } from '@/gen/origin';
import type { Role } from '@/gen/rpg';

import { countries, Generation, languages } from '@/gen/origin';
import { Gender, Sexuality } from '@/gen/people';
import { roles } from '@/gen/rpg';

export const T = {
  country(value: Country): string {
    return countries[value];
  },
  language(value: Language): string {
    return languages[value];
  },
  role(value: Role): string {
    return roles[value];
  },
  gender(value: Gender): string {
    return {
      [Gender.M]: 'Male',
      [Gender.F]: 'Female'
    }[value];
  },
  sexuality(value: Sexuality): string {
    return {
      [Sexuality.NONE]: 'Asexual',
      [Sexuality.BISEXUAL]: 'Bisexual',
      [Sexuality.HETEROSEXUAL]: 'Straight',
      [Sexuality.HOMOSEXUAL]: 'Gay'
    }[value];
  },
  generation(value: Generation): string | null {
    return {
      [Generation.FIRST]: 'First',
      [Generation.SECOND]: 'Second',
      [Generation.THIRD]: 'Third',
      [Generation.NONE]: null
    }[value];
  }
};
