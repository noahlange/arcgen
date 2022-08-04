import type { PersonData } from '../../gen/people/types';

import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import { getEntityReducers } from '../../app/utils';

const adapter = createEntityAdapter<PersonData>();

const slice = createSlice({
  name: 'people',
  initialState: adapter.getInitialState(),
  reducers: getEntityReducers(adapter)
});

export const selectors = adapter.getSelectors();
export const actions = slice.actions;
export const reducer = slice.reducer;
export const path = slice.name;
