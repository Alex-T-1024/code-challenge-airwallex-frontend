import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Example from './pages/Example';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/example" component={Example} />
    </Switch>
  );
};

export default Routes;
