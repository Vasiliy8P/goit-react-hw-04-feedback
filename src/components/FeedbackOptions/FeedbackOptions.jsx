import PropTypes from 'prop-types';
import "./FeedbackOptions.css";

const options = ['good', 'neutral', 'bad'];

const FeedbackOptions = ({onLeaveFeedback}) => {
    return (
        <ul className='FeedbackButton__list'>
            {options.map(option => {
                return (
                   <li key={option}>
                        <button
                            className="FeedbackButton__btn"
                            type="button"
                            onClick={() => onLeaveFeedback(option)}
                        >
                            {option}
                        </button>
                    </li>
                )
            })}
        </ul>
    )
}

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired, 
}

export default FeedbackOptions;