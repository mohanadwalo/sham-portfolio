import styled from 'styled-components';

import { Nav } from './nav';
import listStyleIcon from '../../../assets/svgs/shared/arrow.svg';
import { LinkType } from '../../../types/mainNav';

const StyledTopNav = styled.div`
  ${(props) => props.theme.topNav}
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 3.4rem;
  border-bottom: 0.1px solid ${(props) => props.theme.colors.primaryVariant3};
  z-index: 11;
  background-color: ${(props) => props.theme.colors.primaryDark};
  li {
    :not(:first-child) {
      list-style-type: none;
      background-image: url(${listStyleIcon});
      background-repeat: no-repeat;
      padding-left: 2rem;
    }
  }
`;

type TopNavType = {
  links: LinkType[];
};
export const TopNav: React.FC<TopNavType> = ({ links }: TopNavType) => {
  return (
    <StyledTopNav>
      <Nav
        direction='row'
        takeAvailableSpace={false}
        justifyContent='flex-start'
        renderSubNav={false}
        links={links}
        textTransform='capitalize'
        font='subNavLink'
      />
    </StyledTopNav>
  );
};
