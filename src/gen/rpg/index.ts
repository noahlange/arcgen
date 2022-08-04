import type { Seeder } from '../../lib';
import type { PersonData } from '../people';
import type { PhysiqueData } from '../physique';

import { getRole } from './getRole';
import { getStats } from './getStats';
import { Role, Stat } from './types';

export interface RPGData {
  stats: Record<Stat, number>;
  role: Role;
}

export function getRPG(
  seeder: Seeder,
  data: PersonData,
  physique: PhysiqueData
): RPGData {
  const stats = getStats(seeder, { ...data, ...physique });
  return { stats, role: getRole(seeder, stats) };
}

export { roles } from './getRole';
export { Stat, Role };
