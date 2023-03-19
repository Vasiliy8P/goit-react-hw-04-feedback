import { useState } from "react";
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';


const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = (option) => {  
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break
      
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break
      
      case 'bad':
        setBad(prevState => prevState + 1);
        break
      
      default:
        throw new Error()
    }
  }

  const countTotalFeedback = () => { 
    return (good + neutral + bad);
  }
  
  const countPositiveFeedbackPercentage = () => { 
    const totalFeedback = countTotalFeedback();
    return (Math.round(good * 100 / totalFeedback));   
  }  

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={leaveFeedback} />
          
        {countTotalFeedback() === 0
          ? <Notification
            message="There is no feedback" />
          : <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage} />
        }
      </Section>
    </div>
  )
}

export default App;
