import styled from 'styled-components';

const StyledResultMessage = styled.div<{ color: 'success' | 'fail' }>`
  ${(props) => props.theme.fonts.body};
  color: ${(props) => props.theme.colors[props.color]};
  display: flex;
  width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
`;

type ResultMessageType = {
  message: string;
  color: 'success' | 'fail';
};
export const ResultMessage: React.FC<ResultMessageType> = ({
  message,
  color,
}: ResultMessageType) => {
  return <StyledResultMessage color={color}>{message}</StyledResultMessage>;
};
