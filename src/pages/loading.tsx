import styled from 'styled-components';

const StyledLoading = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading: React.FC = () => {
  return <StyledLoading>Loading...</StyledLoading>;
};
export default Loading;
