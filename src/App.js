import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Dashboard} exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
