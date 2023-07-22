import PropTypes from 'prop-types';
import { StatisticsBox, StatisticsBlock, StatisticsTotal } from "./Statistics.styled";
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => {
  return (
    <StatisticsBox>      
      <StatisticsBlock >
        Good: {good}        
      </StatisticsBlock>

      <StatisticsBlock >
        Neutral: {neutral}        
      </StatisticsBlock>
      
       <StatisticsBlock >
        Bad: {bad}        
      </StatisticsBlock>

      <StatisticsTotal>Total: {total()} </StatisticsTotal>
      <StatisticsTotal>
        Positive feedback:{' '}
        {isNaN(positiveFeedbackPercentage())
          ? 100
          : positiveFeedbackPercentage()}
        %{' '}
      </StatisticsTotal>
    </StatisticsBox>
  );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,  
  total: PropTypes.func.isRequired,
  positiveFeedbackPercentage: PropTypes.func.isRequired,
};