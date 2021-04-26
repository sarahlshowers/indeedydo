import './App.scss';
import React, { Component } from 'react';
import PrimaryButton from './components/Buttons/PrimaryButton';
import SecondaryButton from './components/Buttons/SecondaryButton';

class App extends Component {
  render() {
    return (
      <div>
        <PrimaryButton />
        <SecondaryButton />
      </div>
    )
  }
}

export default App;