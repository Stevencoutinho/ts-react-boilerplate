import * as React from 'react'
// import './images/icon.PNG';

const App = () => {
  const [name, setName] = React.useState('world');

  const handleChange = (e: any) => setName(e.target.value);

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