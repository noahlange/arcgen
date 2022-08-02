import { createSelector } from '@reduxjs/toolkit';
import { selectors } from './peopleSlice';
import { Person } from '../../gen/people/Person';

export const selectAll = createSelector(selectors.selectAll, people =>
  people.map(data => new Person(data))
);

export const selectById = createSelector(selectors.selectById, data =>
  data ? new Person(data) : null
);
