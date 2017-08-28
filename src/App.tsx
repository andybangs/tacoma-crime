import * as React from 'react';
import { VictoryPie, VictoryLabel } from 'victory';
import './App.css';
import crimeData from './data/TacomaCrime.json';
import { Crime, crimeOccurences, pieData } from './util';

const logo = require('./logo.svg');

const crimeNames: string[] = crimeData.data.map(crime => crime[9]);
const crimes: Crime[] = crimeOccurences(crimeNames);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>City of Tacoma Crimes</h2>
          <h3>2014–Present</h3>
        </div>
        <p className="App-intro">Types of Crimes</p>
        <div style={{ height: 350 }}>
          <VictoryPie
            height={350}
            padding={50}
            data={pieData(crimes.slice(0, 10), crimeNames.length)}
            labelComponent={<VictoryLabel style={{ fontSize: 8 }} />}
          />
        </div>
        <div className="App-lists-cont">
          <div className="App-list">
            <h3>10 Most Common Crimes</h3>
            <ul>
              {crimes.slice(0, 10).map((crime, i) =>
                <li key={`most-common-${i}`}>
                  {crime.name}
                </li>
              )}
            </ul>
          </div>
          <div className="App-list">
            <h3>10 Least Common Crimes</h3>
            <ul>
              {crimes.slice(-10).reverse().map((crime, i) =>
                <li key={`least-common-${i}`}>
                  {crime.name}
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
