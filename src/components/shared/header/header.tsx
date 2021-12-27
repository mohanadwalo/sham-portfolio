import { FC, useEffect, useState } from 'react';

import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import { Logo } from './logo';
import { Nav } from '../nav/nav';

import { mainNavLinks } from '../../../constants/mainNavLinks';
import { Button } from '../button';
import { HambergerNav } from '../nav/hambergerNav';
import { ReactComponent as HambergerBtn } from '../../../assets/svgs/shared/circled-menu.svg';
import { IS_SMALL_SCREEN } from '../../../constants/designThreshold';

const StyledHeader = styled.div`
  ${(props) => props.theme.header}
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    min-width: 100%;
    z-index: 14;
    .wrapper {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  .small-nav {
    position: fixed;
    display: flex;
    align-items: center;
    height: 3.5rem;
    width: 100%;
    left: 0;
    top: 0;

    cursor: pointer;
    z-index: 999;
    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }
  .tracker {
    position: absolute;
    width: 1px;
    height: 1px;
    top: 10px;
    left: 0;
  }
`;
type NavOptionsType = {
  isHamburgerNav: boolean;
  hamburgerNavState: 'open' | 'closed';
};

export const Header: FC = () => {
  const location = useLocation();
  const [navOptions, setNavOptions] = useState<NavOptionsType>({
    isHamburgerNav: false,
    hamburgerNavState: 'closed',
  });

  useEffect(() => {
    updateHamburgerNavState('closed');
  }, [location]);

  const updateHamburgerNavState = (state: 'open' | 'closed') => {
    setNavOptions({ ...navOptions, hamburgerNavState: state });
  };

  const isSmallScreen = localStorage.getItem(IS_SMALL_SCREEN);

  return (
    <StyledHeader>
      {isSmallScreen && (
        <div className='small-nav'>
          <div className='content'>
            <HambergerBtn onClick={() => updateHamburgerNavState('open')} />
            <Logo color='#DDF5FD' />
          </div>
        </div>
      )}
      {!isSmallScreen && (
        <div className='header'>
          <div className='wrapper'>
            <Logo color='white' />
            <Nav
              direction='row'
              takeAvailableSpace={true}
              justifyContent='space-around'
              textTransform='uppercase'
              links={mainNavLinks}
              renderSubNav={false}
            />
            <Button
              className='primary'
              title='download cv'
              action={() => {
                window.open(
                  '/assets/sample_cv.pdf',
                  '_blank',
                  'fullscreen=yes'
                );
                return false;
              }}
            />
          </div>
        </div>
      )}
      {navOptions.hamburgerNavState === 'open' && (
        <HambergerNav
          links={mainNavLinks}
          downloadCV={() => {
            window.open('/assets/sample_cv.pdf', '_blank', 'fullscreen=yes');
            return false;
          }}
          closeNav={() => updateHamburgerNavState('closed')}
        />
      )}
    </StyledHeader>
  );
};
