import styled from 'styled-components';
import listStyleIcon from '../../assets/svgs/shared/check-list-style.svg';

const StyledULlist = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  li {
    ${(props) => props.theme.fonts.body}
    list-style-type: none;
    position relative;
    :before {
      position: absolute;
      left: 0;
      top: 3px;
      content: url(${listStyleIcon});
    }
    padding-bottom: 0.6rem;
    padding-left: 2rem;
  }
`;

type ULlistType = {
  children: React.ReactNode;
};
export const ULlist: React.FC<ULlistType> = ({ children }: ULlistType) => {
  return <StyledULlist>{children}</StyledULlist>;
};
