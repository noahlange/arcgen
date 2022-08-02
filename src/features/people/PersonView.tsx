import { Person } from '../../gen/people';
import PersonDataTable from './PersonDataTable';
import PersonStatTable from './PersonStatTable';

interface PersonViewProps {
  data: Person;
}

export function PersonView(props: PersonViewProps) {
  return (
    <div>
      <div className="row">
        <div className="col-7">
          <h2>{props.data.name}</h2>
        </div>
        <div className="col-5">
          <PersonDataTable data={props.data} />
          <PersonStatTable data={props.data} />
        </div>
      </div>
    </div>
  );
}
