import PropTypes from 'prop-types';
import { SectionBox, Title } from './Section.styled'
export const Section = ({ title, children }) => (  
    <SectionBox>
        <Title> {title} </Title>
        <>{ children}</>
    </SectionBox>  
);
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};