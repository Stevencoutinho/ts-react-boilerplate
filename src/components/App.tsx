/* React */
import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
/* Components */
import Header from './Header';
import Nav from './Nav';
import Welcome from './Welcome';
/* Store */
import { Store, StoreProvider } from '@/src/Store';

const App: FC = (): JSX.Element => {
  return (
    <>
      <Router>
        <Header />
        <Nav />
        <main>
          <Route exact path="/">
              <h1>Hello, world!!</h1>
          </Route>
          <Route exact path="/login">
            <StoreProvider>
              <Welcome />
            </StoreProvider>
          </Route>
        </main>
      </Router>
    </>
  );
};


export default App;