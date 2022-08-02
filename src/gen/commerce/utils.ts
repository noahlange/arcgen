import type { Service, Type } from './types';

export function getCommerceType(types: Type[]): number {
  return types.reduce((res, type) => res | type, 0);
}

export function getCommerceServices(...services: Service[]): number {
  return services.reduce((res, service) => res | service, 0);
}
