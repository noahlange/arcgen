import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import * as people from '../features/people';

export const store = configureStore({
  reducer: {
    [people.path]: people.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
