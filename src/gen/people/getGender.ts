import type { Seeder } from '../../lib/Seeder';

import { percentTable } from '../../utils';
import { Gender, Sexuality } from './types';

export function getGender(seeder: Seeder): Gender {
  const { rng } = seeder.use('gender');
  return percentTable({ [Gender.F]: 0.51, [Gender.M]: 0.49 }, rng.quick());
}

/**
 * Assumption here is that people 50 years from now are more likely to be
 * bisexual, and that most people drifting into that category would otherwise be
 * straight.
 */
export function getSexuality(seeder: Seeder, gender: Gender): Sexuality {
  const { rng } = seeder.use('sexuality');
  const rand = rng.quick();
  return percentTable<Sexuality>(
    {
      [Sexuality.NONE]: 0.01,
      [Sexuality.HETEROSEXUAL]: 0.8,
      // fun fact: women are less likely to be gay than men...
      [Sexuality.HOMOSEXUAL]: gender === Gender.F ? 0.04 : 0.07,
      // ...but are more likely to be bisexual.
      [Sexuality.BISEXUAL]: gender === Gender.F ? 0.15 : 0.12
    },
    rand
  );
}
