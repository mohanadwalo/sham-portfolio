import { FC } from 'react';

import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../../assets/svgs/shared/close.svg';
import { LinkType } from '../../../types/mainNav';
import { Button } from '../button';
import { Logo } from '../header/logo';
import { Nav } from './nav';

const StyledHambergerNav = styled.div`
  position: fixed;
  top: 5px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.colors.overlay};
  .content-area {
    background-color: ${(props) => props.theme.colors.primaryLight};
    width: 20rem;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    box-shadow: 2px 0px 5px ${(props) => props.theme.colors.primaryVariant1};
    padding: 1rem;
    .close {
      position: absolute;
      cursor: pointer;
      top: 1rem;
      right: 1rem;
      z-index: 100;
      svg {
        path{
          fill: ${(props) => props.theme.colors.primaryVariant2};
        }
       }
      }
    }
  }
`;

type HambergerNavType = {
  links: LinkType[];
  closeNav: () => void;
  downloadCV: () => void;
};

export const HambergerNav: FC<HambergerNavType> = ({
  links,
  closeNav,
  downloadCV,
}) => {
  return (
    <StyledHambergerNav>
      <div className='content-area'>
        <div className='close'>
          <CloseIcon onClick={closeNav} />
        </div>
        <Logo color='#00252E' />
        <Nav
          direction='column'
          takeAvailableSpace={false}
          justifyContent='flex-start'
          color='#003844'
          activeColor='#1C84A7'
          textTransform='uppercase'
          links={links}
          renderSubNav={true}
        />
        <Button className='primary' title='download cv' action={downloadCV} />
      </div>
    </StyledHambergerNav>
  );
};
