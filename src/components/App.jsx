import {useState} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
export default function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  

  const counter = (e) => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }    
  };
  
    const countTotalFeedback = good + neutral + bad;    
    const countPositiveFeedbackPercentage = Math.round((good * 100) / countTotalFeedback);
  
  const options = ['good', 'neutral', 'bad']

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            counter={counter}
          />
        </Section>

         <Section title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage}
            />
          )}
        </Section> 
      </div>
    );
  }

