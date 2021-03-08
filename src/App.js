import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Tutorial from './components/Tutorial';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <Switch>
      <Route component={Dashboard} exact path="/" />
      <Route component={Tutorial} path="/tutorials/:id/steps/:stepNumber" />
      <Route component={Edit} path="/tutorials/:id/languages/:langid/edit" />
    </Switch>
  );
}

export default App;
