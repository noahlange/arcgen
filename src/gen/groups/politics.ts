import type { Seeder } from '../../lib/Seeder';

import { RNG } from '../../utils';
import { Ideology } from './types';

const social = [
  Ideology.CENTRIST,
  Ideology.PROGRESSIVE,
  Ideology.CONSERVATIVE,
  Ideology.THEOCRATIC
];

const economic = [
  Ideology.CAPITALIST,
  Ideology.NEOLIBERAL,
  Ideology.SOCIALIST,
  Ideology.COMMUNIST
];

const traits = [
  Ideology.LIBERTARIAN,
  Ideology.AUTHORITARIAN,
  Ideology.ENVIRONMENTALIST
];

export function getIdeology(seeder: Seeder): Ideology[] {
  const { quick } = seeder.use('ideology').rng;
  return [
    RNG.pick(quick, social),
    RNG.pick(quick, economic),
    ...RNG.pick(quick, traits, quick() > 0.25 ? 1 : 0)
  ];
}
