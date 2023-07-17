import { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = () => 
    this.setState(prevState) => ({good: prevState.good + 1});
  

  render() {
    return (
      <div>
        <h3>Please leave feedback</h3>
        <button onClick={this.handleClick}>Good</button>
        <button onClick={this.handleClick}>Neutral</button>
        <button onClick={this.handleClick}>Bad</button>
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
