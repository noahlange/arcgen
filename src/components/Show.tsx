import type { ReactNode } from 'react';

import React from 'react';

interface ShowWithProps<T> {
  value: T | null | undefined;
  children: (value: T) => ReactNode;
}

export function ShowWith<T>(props: ShowWithProps<T>): JSX.Element | null {
  return props.value === null || props.value === undefined ? null : (
    <>{props.children(props.value)}</>
  );
}

type ShowIfProps = React.PropsWithChildren<{ value: boolean }>;

export function ShowIf(props: ShowIfProps): JSX.Element | null {
  return props.value ? <>{props.children}</> : null;
}
