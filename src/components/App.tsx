/* React */
import React, { FC } from 'react'
/* types */
import { test } from '@/types';

const App: FC = (): JSX.Element => {
  const [name, setName] = React.useState<string>('world');

  const obj: test = {
    id: 10,
    name: 'aaa'
  };

  console.log(obj);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => setName(e.target.value);
  
  return (
    <main>
      <h1 className="welcome">Hello, {name}</h1>
      <div>
        <input type="text" onChange={handleChange} />
      </div>
    </main>
  );
};

export default App;
