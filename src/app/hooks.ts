import type { AppDispatch, RootState } from './store';
import type { TypedUseSelectorHook } from 'react-redux';

import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RNGContext } from './context';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useSeed(): string {
  return useContext(RNGContext);
}
