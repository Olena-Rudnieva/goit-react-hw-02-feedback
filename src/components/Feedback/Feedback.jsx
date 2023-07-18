const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h3>Please leave feedback</h3>
      {Object.keys(options).map(option => {
        return (
          <button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default Feedback;
