/* React */
import React from 'react';
/* Store */
import { Store } from '@/src/Store';
/* MyTypes */
import { GlobalState, GlobalStoreProvider } from '@/types';

const Welcome: React.FC = (): JSX.Element => {
  const { state, dispatch }: GlobalStoreProvider = React.useContext(Store);

  const [ value, setValue ] = React.useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "TEST",payload: { name: value } });
    setValue("");
  };
  console.log(state);
  console.log(value);
  return (
    <>
      <h1>{state.name}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setValue(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Welcome;