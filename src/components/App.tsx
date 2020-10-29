import React, { FC } from 'react'
// import './images/icon.PNG';

const App: FC = (): JSX.Element => {
  const [name, setName] = React.useState<string>('world');

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