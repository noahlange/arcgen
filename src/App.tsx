import { ChangeEvent, useMemo, useState } from 'react';

import './App.css';

import { Provider } from 'react-redux';

import { store } from './app/store';
import { Person, getPersonData } from './gen/people';
import { PersonView } from './features/people/PersonView';
import { Seeder } from './lib';
import { RNG } from './utils';

const DEFAULT_SEED = () => Math.round(Math.random() * 1000);

export default function App() {
  const [seed, setSeed] = useState(DEFAULT_SEED());
  const seeder = useMemo(() => new Seeder(seed.toString()), [seed]);
  const getBetween = useMemo(() => RNG.getBetween(seeder.rng), [seeder]);

  const person = useMemo(
    () => new Person(getPersonData(seeder, { id: 1, age: getBetween(20, 30) })),
    [seeder, getBetween]
  );

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
