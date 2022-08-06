import { useMemo, useState } from 'react';
import { Container, Stack } from 'react-bootstrap';

import { getPersonData, Person } from '@/gen/people';

import { Paginator } from './components/Paginator';
import { PeopleTable } from './features/people';

export default function App(): JSX.Element {
  const [start, setStart] = useState(0);

  const people = useMemo(
    () =>
      Array.from('0000000000', (_, i) => {
        const seed = (start + i).toString();
        return new Person(getPersonData(seed, { id: seed, age: 25 }));
      }),
    [start]
  );

  return (
    <div className="my-4">
      <Container>
        <PeopleTable data={people} />
        <Stack>
          <Paginator
            onPageChange={page => setStart(page.selected * 10)}
            pageCount={100}
          />
        </Stack>
      </Container>
    </div>
  );
}
