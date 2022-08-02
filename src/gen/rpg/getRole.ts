import { Seeder } from '../../lib';
import { RNG, _ } from '../../utils';
import { Stat, Role } from './types';

const arr = [
  Role.MUSCLE,
  Role.HACKER,
  Role.SNEAK,
  Role.GADGE,
  Role.STITCH,
  Role.FACE,
  Role.BROKER,
  Role.CORPO,
  Role.MEDIA,
  Role.SMUGGLER
];

export const roles: Record<Role, string> = {
  [Role.MUSCLE]: 'Muscle',
  [Role.HACKER]: 'Hacker',
  [Role.SNEAK]: 'Sneak',
  [Role.GADGE]: 'Gadge',
  [Role.STITCH]: 'Stitch',
  [Role.FACE]: 'Face',
  [Role.BROKER]: 'Broker',
  [Role.CORPO]: 'Corpo',
  [Role.MEDIA]: 'Media',
  [Role.SMUGGLER]: 'Smuggler',
  [Role.COP]: 'Cop',
  [Role.RAT]: 'Rat'
};

const preferred = {
  [Stat.CON]: [Role.MUSCLE],
  [Stat.INT]: [Role.HACKER, Role.STITCH],
  [Stat.AGI]: [Role.SNEAK],
  [Stat.DEX]: [Role.GADGE, Role.MUSCLE],
  [Stat.PER]: [Role.BROKER, Role.SMUGGLER],
  [Stat.CHA]: [Role.FACE, Role.MEDIA]
};

export function getRole(seeder: Seeder, stats: Record<Stat, number>): Role {
  const { rng } = seeder.use('role');

  const max = Math.max(...Object.values(stats));
  const highest = RNG.pick(
    rng.quick,
    _.keys(stats).filter(key => stats[key] === max)
  );
  const options = new Set(highest ? preferred[highest] : arr);

  if (stats.DEX < 5) {
    options.delete(Role.GADGE);
  }
  if (stats.AGI < 5) {
    options.delete(Role.SNEAK);
  }
  if (stats.CON < 5) {
    options.delete(Role.MUSCLE);
  }
  if (stats.INT < 7) {
    options.delete(Role.HACKER);
    options.delete(Role.STITCH);
  }
  if (stats.PER < 5) {
    options.delete(Role.BROKER);
  }
  if (stats.CHA < 7) {
    options.delete(Role.MEDIA);
    options.delete(Role.FACE);
  }

  return RNG.pick(rng, Array.from(options));
}
