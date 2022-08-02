import { DataStore, MetaStore } from '../../lib';
import { _, RNG } from '../../utils';
import { Seeder } from '../../lib/Seeder';
import { Group, GroupTag, GroupType } from './types';

export function getGroups(seeder: Seeder): MetaStore<Group> {
  const store = new MetaStore({
    seed: new DataStore<string>(),
    type: new DataStore<GroupType>(),
    tags: new DataStore<GroupTag[]>()
  });

  const s = seeder.use('groups');
  const enumber = (key: string | number) => typeof key === 'number';
  const tags = _.values(GroupTag).filter(enumber);
  const types = _.values(GroupType).filter(enumber);

  for (let i = 1; i <= 10; i++) {
    store.add({
      seed: s.use(i).value,
      type: RNG.pick(s.rng.quick, types),
      tags: RNG.pick(s.rng.quick, tags, Math.ceil(s.rng.quick() * 3))
    });
  }

  return store;
}
