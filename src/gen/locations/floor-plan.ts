import { FloorTag } from './types';

export interface FloorLevel {
  name?: string;
  levels: [number, number];
  type: FloorTag[];
}

export const plan: FloorLevel[] = [
  {
    levels: [197, 200],
    type: [FloorTag.MAINTENANCE]
  },
  {
    levels: [195, 196],
    type: [FloorTag.GOVERNANCE, FloorTag.BROADCAST]
  },
  {
    name: 'Corp+',
    levels: [156, 194],
    type: [FloorTag.CORPORATE, FloorTag.PLUS]
  },
  {
    levels: [155, 155],
    type: [FloorTag.BOUNDARY]
  },
  {
    levels: [150, 154],
    type: [FloorTag.TRANSPORT, FloorTag.OBSERVATORY]
  },
  {
    levels: [149, 149],
    type: [FloorTag.MAINTENANCE]
  },
  {
    name: 'High Corp',
    levels: [111, 148],
    type: [FloorTag.CORPORATE, FloorTag.HIGH]
  },
  {
    name: 'Low Corp',
    levels: [106, 110],
    type: [FloorTag.CORPORATE, FloorTag.GOVERNANCE, FloorTag.SERVICES]
  },
  {
    levels: [105, 105],
    type: [FloorTag.BOUNDARY, FloorTag.OBSERVATORY]
  },
  {
    levels: [100, 104],
    type: [FloorTag.OBSERVATORY, FloorTag.TRANSPORT]
  },
  {
    levels: [99, 99],
    type: [FloorTag.MAINTENANCE]
  },
  {
    name: 'Res+',
    levels: [81, 98],
    type: [FloorTag.RESIDENTIAL]
  },
  {
    levels: [76, 80],
    type: [FloorTag.RESIDENTIAL, FloorTag.GOVERNANCE, FloorTag.SERVICES]
  },
  {
    levels: [75, 75],
    type: [FloorTag.OBSERVATORY, FloorTag.BOUNDARY]
  },
  {
    levels: [74, 74],
    type: [FloorTag.MAINTENANCE]
  },
  {
    name: 'HiRes',
    levels: [51, 73],
    type: [FloorTag.RESIDENTIAL]
  },
  {
    levels: [50, 50],
    type: [FloorTag.OBSERVATORY]
  },
  {
    levels: [49, 49],
    type: [FloorTag.MAINTENANCE]
  },
  {
    name: 'Res',
    levels: [26, 48],
    type: [FloorTag.RESIDENTIAL]
  },
  {
    levels: [25, 25],
    type: [FloorTag.BOUNDARY, FloorTag.OBSERVATORY]
  },
  {
    levels: [24, 24],
    type: [FloorTag.MAINTENANCE]
  },
  {
    name: 'LowRes',
    levels: [11, 23],
    type: [FloorTag.RESIDENTIAL, FloorTag.LOW]
  },
  {
    levels: [6, 10],
    type: [FloorTag.GOVERNANCE, FloorTag.SERVICES]
  },
  {
    levels: [1, 5],
    type: [FloorTag.COMMERCIAL]
  },
  {
    levels: [0, 0],
    type: [FloorTag.COMMERCIAL]
  },
  {
    levels: [-5, -1],
    type: [FloorTag.MAINTENANCE, FloorTag.INDUSTRIAL]
  }
];
