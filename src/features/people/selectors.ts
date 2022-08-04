import { createSelector } from '@reduxjs/toolkit';

import { Person } from '../../gen/people/Person';
import { selectors } from './peopleSlice';

export const selectAll = createSelector(selectors.selectAll, people =>
  people.map(data => new Person(data))
);

export const selectById = createSelector(selectors.selectById, data =>
  data ? new Person(data) : null
);
