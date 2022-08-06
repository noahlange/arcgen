import type { Seeder } from '../../lib/Seeder';
import type { Group } from './types';

import { DataStore, MetaStore } from '../../lib';
import { _, RNG } from '../../utils';
import { GroupTag, GroupType } from './types';

export function getGroups(seeder: Seeder): MetaStore<Group> {
  const store = new MetaStore({
    seed: new DataStore<string>(),
    type: new DataStore<GroupType>(),
    tags: new DataStore<GroupTag[]>()
  });

  const seed = seeder.use('groups');
  const enumber = (k: string | number): k is number => typeof k === 'number';
  const tags = _.values(GroupTag).filter(enumber);
  const types = _.values(GroupType).filter(enumber);

  for (let i = 1; i <= 10; i++) {
    store.add({
      seed: seed.use(i).value,
      type: RNG.pick(seed.rng.quick, types),
      tags: RNG.pick(seed.rng.quick, tags, Math.ceil(seed.rng.quick() * 3))
    });
  }

  return store;
}
