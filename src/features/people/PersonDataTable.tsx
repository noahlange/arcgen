import { T } from '../../components';
import { Generation } from '../../gen/origin';
import { Physique, Person, Sexuality } from '../../gen/people';

interface PersonDataTableProps {
  data: Person;
}

export default function PersonDataTable(
  props: PersonDataTableProps
): JSX.Element {
  const person = props.data;
  const { data, physique } = person;
  const height = Physique.getImperialHeight(physique.height);
  const weight = Physique.getImperialWeight(physique.weight);

  return (
    <table className="table">
      <tbody>
        <tr>
          <th>Gender</th>
          <td>{data.gender}</td>
        </tr>
        <tr>
          <th>Date of Birth</th>
          <td>
            {new Date(data.date_of_birth).toLocaleDateString()} (aged {data.age}
            )
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
        <tr>
          <th>Generation</th>
          <td>
            {Generation[data.gen]} / {T.country(data.country)}
          </td>
        </tr>
        <tr>
          <th>Sexuality</th>
          <td>{Sexuality[data.sexuality]}</td>
        </tr>
      </tbody>
    </table>
  );
}
