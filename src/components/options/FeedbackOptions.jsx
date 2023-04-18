import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => (
  <div
    className="btn-group"
    role="group"
    aria-label="Basic mixed styles example"
  >
    <button
      type="button"
      className="btn btn-success"
      name="good"
      onClick={onLeaveFeedback}
    >
      Good
    </button>
    <button
      type="button"
      className="btn btn-warning"
      name="neutral"
      onClick={onLeaveFeedback}
    >
      Neutral
    </button>
    <button
      type="button"
      className="btn btn-danger"
      name="bad"
      // value={options.bad}
      onClick={onLeaveFeedback}
    >
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };
