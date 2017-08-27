import * as React from 'react';
import './App.css';
import crimeData from './data/TacomaCrime.json';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Finagraph Crime</h2>
        </div>
        <p className="App-intro">
          Crimes in 2016:{' '}
          {crimeData.data.filter(crime => crime[10].startsWith('2016')).length}
        </p>
      </div>
    );
  }
}

export default App;
