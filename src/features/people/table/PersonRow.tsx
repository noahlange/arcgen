import type { Person } from '@/gen/people';

import { T } from '@/components';
import { getImperialHeight, getImperialWeight } from '@/gen/physique';

interface PersonRowProps {
  data: Person;
}

function PersonRowPhysique(props: PersonRowProps): JSX.Element {
  const person = props.data;
  return (
    <>
      <td>{getImperialHeight(person.physique.height)} </td>
      <td>{getImperialWeight(person.physique.weight)}</td>
      <td>{person.physique.bmi}</td>
    </>
  );
}

function PersonRowStats(props: PersonRowProps): JSX.Element {
  const person = props.data;
  return (
    <>
      <td className="text-center">{person.rpg.stats.DEX}</td>
      <td className="text-center">{person.rpg.stats.AGI}</td>
      <td className="text-center">{person.rpg.stats.CON}</td>
      <td className="text-center">{person.rpg.stats.INT}</td>
      <td className="text-center">{person.rpg.stats.PER}</td>
      <td className="text-center">{person.rpg.stats.CHA}</td>
    </>
  );
}

export function PersonRow(props: PersonRowProps): JSX.Element {
  const person = props.data;
  return (
    <tr>
      <th>{person.name}</th>
      <th className="text-muted fw-light">{person.seed}</th>
      <td>{person.data.age}</td>
      <td>{person.gender}</td>
      <td>{T.role(person.rpg.role)}</td>
      <td>{T.country(person.data.country)}</td>
      <PersonRowPhysique {...props} />
      <PersonRowStats {...props} />
    </tr>
  );
}
