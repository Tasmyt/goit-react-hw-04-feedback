import PropTypes from 'prop-types';
import { StatisticsBlock } from "../Statistics/Statistics.styled";
export const Notification = ({ message }) => (      
        <StatisticsBlock> {message} </StatisticsBlock>      
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};