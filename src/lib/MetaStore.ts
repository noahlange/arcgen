import type { DataStore } from './DataStore';

import { _ } from '../utils';

type Stores<T> = {
  [K in keyof T]: DataStore<T[K]>;
};

export class MetaStore<T> {
  protected stores: Stores<T>;
  protected ids: Set<number> = new Set();

  public add(data: T): void {
    this.set(Math.max(...this.ids, 0) + 1, data);
  }

  public set(id: number, data: T): void {
    this.ids.add(id);
    for (const [key, store] of _.entries(this.stores)) {
      store.set(id, data[key]);
    }
  }

  public get(id: number): T | null {
    if (this.ids.has(id)) {
      return Object.entries(this.stores).reduce(
        (rest, [key, store]) => ({
          ...rest,
          [key]: (store as DataStore<any>).get(id)
        }),
        {}
      ) as T;
    }
    return null;
  }

  public *[Symbol.iterator](): IterableIterator<T> {
    for (const id of this.ids) {
      yield this.get(id) as T;
    }
  }

  public constructor(stores: Stores<T>) {
    this.stores = stores;
  }
}
