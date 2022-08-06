import { expect, test } from '@jest/globals';

import iq from '@/data/iq.json';

import { Country, Generation } from '../origin';
import { getIQMod } from './utils';

test('INT bonus gradually reverts to US baseline', () => {
  const us = iq[Country.US].rel;
  const fi = iq[Country.FI].rel;

  expect(getIQMod(Country.FI, Generation.FIRST)).toBe(fi);
  expect(getIQMod(Country.FI, Generation.SECOND)).toBe((fi + us) / 2);
  expect(getIQMod(Country.FI, Generation.NONE)).toBe(us);
});
