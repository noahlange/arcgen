import type { Person } from '../../gen/people';

import { ShowIf, T } from '../../components';
import { Generation } from '../../gen/origin';
import { Physique } from '../../gen/people';

interface PersonDataTableProps {
  data: Person;
}

export default function PersonDataTable(
  props: PersonDataTableProps
): JSX.Element {
  const person = props.data;
  const { data, physique, dob } = person;
  const height = Physique.getImperialHeight(physique.height);
  const weight = Physique.getImperialWeight(physique.weight);

  return (
    <table className="table small table-sm table-flush">
      <tbody>
        <tr>
          <th>Gender</th>
          <td>{data.gender}</td>
        </tr>
        <tr>
          <th>Date of Birth</th>
          <td>
            {dob.toLocaleDateString()} (aged {data.age})
          </td>
        </tr>
        <tr>
          <th>Height</th>
          <td>{height}</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>{weight}</td>
        </tr>
        <tr>
          <th>BMI</th>
          <td>{physique.bmi}</td>
        </tr>
        <tr>
          <th>Role</th>
          <td>{T.role(props.data.rpg.role)}</td>
        </tr>
        <tr>
          <th>Languages</th>
          <td>{data.languages.map(T.language).join(', ')}</td>
        </tr>
        <ShowIf value={data.gen !== Generation.NONE}>
          <tr>
            <th>Generation</th>
            <td>
              {T.generation(data.gen)} / {T.country(data.country)}
            </td>
          </tr>
        </ShowIf>
        <tr>
          <th>Sexuality</th>
          <td>{T.sexuality(data.sexuality)}</td>
        </tr>
      </tbody>
    </table>
  );
}
