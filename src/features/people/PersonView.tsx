import type { Person } from '../../gen/people';

import './PersonView.css';

import { Card } from 'react-bootstrap';

import PersonDataTable from './PersonDataTable';
import PersonStatTable from './PersonStatTable';

interface PersonViewProps {
  data: Person;
}

export function PersonView(props: PersonViewProps): JSX.Element {
  return (
    <div style={{ width: 480 }}>
      <Card>
        <Card.Header>
          <h4 className="mb-0 d-flex justify-content-between align-items-center">
            {props.data.name}
            <small className="seed">{props.data.seed}</small>
          </h4>
        </Card.Header>
        <PersonStatTable data={props.data} />
        <PersonDataTable data={props.data} />
      </Card>
    </div>
  );
}
