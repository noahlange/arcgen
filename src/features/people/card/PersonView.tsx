import type { Person } from '../../../gen/people';

import './PersonView.scss';

import PersonDataTable from './PersonDataTable';
import PersonStatTable from './PersonStatTable';

interface PersonViewProps {
  data: Person;
}

export function PersonView(props: PersonViewProps): JSX.Element {
  return (
    <div className="person-view" style={{ width: 480 }} data-augmented-ui>
      <div className="card-2">
        <h3 className="text-display mb-0 d-flex justify-content-between align-items-center mb-2">
          {props.data.name}
          <small className="seed text-muted">{props.data.seed}</small>
        </h3>
        <PersonStatTable data={props.data} />
        <PersonDataTable data={props.data} />
      </div>
    </div>
  );
}
