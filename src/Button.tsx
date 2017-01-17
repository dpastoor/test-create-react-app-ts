import * as React from 'react';
import ObservableCounter from './counter';
import { observer } from 'mobx-react';

interface ButtonProps {
  counter: ObservableCounter;
}
@observer
class Buttons extends React.Component<ButtonProps, {}> {
  render() {
    return (
      <div className="Button">
      <button
        onClick={() => this.props.counter.increment()}
      > 
      Inc 
      </button>
      <button
        onClick={() => this.props.counter.decrement()}
      > 
      Dec 
      </button>
      </div>
    );
  }
}

export default Buttons;
