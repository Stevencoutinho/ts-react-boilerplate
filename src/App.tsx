/* React */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* Components */
import Top from "./components/05_pages/Top";
import NotFound from "./components/05_pages/NotFound";

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Top} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;