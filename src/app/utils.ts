import type {
  EntityAdapter,
  EntityState,
  EntityStateAdapter,
  SliceCaseReducers
} from '@reduxjs/toolkit';

type EntityReducers<E> = EntityStateAdapter<E> &
  SliceCaseReducers<EntityState<E>>;

/**
 * Given an entity adapter, return all the case reducers.
 */
export function getEntityReducers<E>(
  adapter: EntityAdapter<E>
): EntityStateAdapter<E> & SliceCaseReducers<EntityState<E>> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getSelectors, selectId, sortComparer, getInitialState, ...rest } =
    adapter;
  return rest as EntityReducers<E>;
}
