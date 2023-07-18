const Feedback = ({ props, handleClick, total }) => {
  const { good, neutral, bad } = props;

  return (
    <div>
      <h3>Please leave feedback</h3>
      {Object.keys(props).map(option => {
        console.log(props);
        return (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
          >
            {option}
          </button>
        );
      })}
      <h2>Statistics</h2>
      <p>
        Good: <span>{good}</span>
      </p>
      <p>
        Neutral: <span>{neutral}</span>
      </p>
      <p>
        Bad: <span>{bad}</span>
      </p>
      <p>
        Total: <span>{total}</span>
      </p>
      <p>
        Positive Feedback: <span>{}</span>%
      </p>
    </div>
  );
};

export default Feedback;
