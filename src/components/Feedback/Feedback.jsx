import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () =>
    this.setState(prevState => ({ good: prevState.good + 1 }));

  handleClickNeutral = () =>
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));

  handleClickBad = () =>
    this.setState(prevState => ({ bad: prevState.bad + 1 }));

  render() {
    return (
      <div>
        <h3>Please leave feedback</h3>
        <button onClick={this.handleClickGood}>Good</button>
        <button onClick={this.handleClickNeutral}>Neutral</button>
        <button onClick={this.handleClickBad}>Bad</button>
        <h2>Statistics</h2>
        <p>
          Good: <span>{this.state.good}</span>{' '}
        </p>
        <p>
          Neutral: <span>{this.state.neutral}</span>
        </p>
        <p>
          Bad:<span>{this.state.bad}</span>
        </p>
      </div>
    );
  }
}

export default Feedback;
