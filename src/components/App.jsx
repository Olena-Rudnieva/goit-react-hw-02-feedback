import { Component } from 'react';
import Feedback from './Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    return (
      <div>
        <Feedback
          props={this.state}
          handleClick={this.handleClick}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}
