import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Tutorial from './components/Tutorial';

import './App.css';

function App() {
  return (
    <Switch>
      <Route component={Tutorial} path="/tutorials/:id/steps/:stepNumber" />
    </Switch>
  );
}

export default App;
