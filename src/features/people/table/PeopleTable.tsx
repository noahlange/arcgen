import type { Person } from '@/gen/people';

import './PeopleTable.scss';

import { Table } from 'react-bootstrap';

import { PersonRow } from './PersonRow';

interface PeopleTableProps {
  data: Person[];
}

export function PeoplePhysiqueHeader(): JSX.Element {
  return (
    <>
      <th rowSpan={2}>Height</th>
      <th rowSpan={2}>Weight</th>
      <th rowSpan={2}>BMI</th>
    </>
  );
}

export function PeopleStatsHeader(): JSX.Element {
  return (
    <tr>
      <th className="stat">DEX</th>
      <th className="stat">AGI</th>
      <th className="stat">CON</th>
      <th className="stat">INT</th>
      <th className="stat">PER</th>
      <th className="stat">CHA</th>
    </tr>
  );
}

export function PeopleTable(props: PeopleTableProps): JSX.Element {
  return (
    <Table size="sm" className="small">
      <thead>
        <tr>
          <th rowSpan={2}>Name</th>
          <th rowSpan={2}>Seed</th>
          <th rowSpan={2}>Age</th>
          <th rowSpan={2}>Sex</th>
          <th rowSpan={2}>Role</th>
          <th rowSpan={2}>Origin</th>
          <PeoplePhysiqueHeader />
          <th className="text-center" colSpan={6}>
            Stats
          </th>
        </tr>
        <PeopleStatsHeader />
      </thead>
      <tbody>
        {props.data.map(person => (
          <PersonRow key={person.seed} data={person} />
        ))}
      </tbody>
    </Table>
  );
}
