import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h3>Statistics</h3>
            <ul className='Statistics__list'>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total()}</li>
                <li>Positive feedback: { positivePercentage() }%</li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

export default Statistics;