import * as React from 'react';
import './App.css';
import ObservableCounter from './counter';
import { observer } from 'mobx-react';
import Buttons from './Button';
const logo = require('./logo.svg');

const counter = new ObservableCounter()

@observer
class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          The counters value is: {counter.count}
        </p>
        <Buttons counter={counter} />
      </div>
    );
  }
}

export default App;
