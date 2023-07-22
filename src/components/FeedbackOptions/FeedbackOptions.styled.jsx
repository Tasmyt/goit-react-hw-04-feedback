import styled from 'styled-components';
import { theme } from 'components/theme';
export const Buttons = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
`;
export const Button = styled.button`
  display: flex;
  margin: 20px;
  width: 120px;
  height: 40px;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: ${theme.colors.primaryText};
  background-color: ${theme.colors.shadow};
  border: 4px outset ${theme.colors.secondaryText};
  border-radius: 16px;
`;
