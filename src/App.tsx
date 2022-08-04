import type { ChangeEvent } from 'react';

import './App.css';

import { useMemo, useState } from 'react';
import { Provider } from 'react-redux';

import { store } from './app/store';
import { PersonView } from './features/people/PersonView';
import { getPersonData, Person } from './gen/people';
import { Seeder } from './lib';
import { RNG } from './utils';

const DEFAULT_SEED = () => Math.round(Math.random() * 1000);

const DEFAULT_SEED = (): number => Math.round(Math.random() * 1000);

export default function App(): JSX.Element {
  const [seed, setSeed] = useState(DEFAULT_SEED());

  const person = useMemo(() => {
    const seeder = new Seeder(seed.toString());
    const age = RNG.getBetween(seeder.rng)(20, 30);
    return new Person(getPersonData(seed.toString(), { id: 1, age }));
  }, [seed]);

  const handle = {
    onRandom: () => setSeed(DEFAULT_SEED()),
    onChange: (e: ChangeEvent<HTMLInputElement>) => setSeed(+e.target.value)
  };

  return (
    <Provider store={store}>
      <div className="container mt-5">
        <div className="row">
          <div className="col mb-3">
            <div className="input-group ms-auto">
              <input
                className="form-control"
                type="text"
                value={seed}
                onChange={handle.onChange}
              />
              <button
                className="btn btn-primary"
                type="button"
                onClick={handle.onRandom}
              >
                Random ({seed})
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <PersonView data={person} />
      </div>
    </Provider>
  );
}
