import './App.scss';
import React, { Component } from 'react';
import HomePage from './components/routes/HomePage';
import EditPage from './components/routes/EditPage';
import AddPage from './components/routes/AddPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/add" component={AddPage} />
          <Route path="/edit" component={EditPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
