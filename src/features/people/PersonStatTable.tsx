import { Person } from '../../gen/people';

interface PersonDataTableProps {
  data: Person;
}

export default function PersonStatTable(
  props: PersonDataTableProps
): JSX.Element {
  const data = props.data.rpg.stats;

  return (
    <table className="table text-center">
      <thead>
        <tr>
          <th>DEX</th>
          <th>AGI</th>
          <th>CON</th>
          <th>INT</th>
          <th>PER</th>
          <th>CHA</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.DEX}</td>
          <td>{data.AGI}</td>
          <td>{data.CON}</td>
          <td>{data.INT}</td>
          <td>{data.PER}</td>
          <td>{data.CHA}</td>
        </tr>
      </tbody>
    </table>
  );
}
