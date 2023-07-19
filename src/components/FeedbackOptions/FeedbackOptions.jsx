import PropTypes from 'prop-types';
import { FeedbackWrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackWrapper>
      {Object.keys(options).map(option => {
        const newOption = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <Button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {newOption}
          </Button>
        );
      })}
    </FeedbackWrapper>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
