import styled from 'styled-components';
import { theme } from 'components/theme';
export const SectionBox = styled.div`
  width: 50vw;
  margin: auto;
  padding-bottom: 4px;
  background-color: ${theme.colors.fond};
`;
export const Title = styled.h2`
  margin-bottom: 0;
  padding: 20px 20px 0 20px;
  font-size: 40px;
  color: ${theme.colors.primaryText};
  text-shadow: 2px 2px 0px ${theme.colors.shadow},
    4px 4px 0px ${theme.colors.secondaryText};
`;
