import { countries, Country, Language, languages } from '../gen/origin';
import { Gender } from '../gen/people';
import { Role, roles } from '../gen/rpg';

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
    return value === Gender.F ? 'female' : 'male';
  }
};
