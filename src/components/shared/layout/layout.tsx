import { FC } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import styled from 'styled-components';

import dotsIcon from '../../../assets/svgs/shared/bg-dots.svg';
import { TopNav } from '../nav/topNav';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

const StyledLayout = styled.div`
  ${(props) => props.theme.layout}
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;
  .dots {
    width: 23.25rem;
    height: 22.457rem;
    background-image: url(${dotsIcon});
    background-size: cover;
    position: fixed;
    z-index: -1;
    &.left {
      left: 0;
      top: 30%;
    }
    &.right-top {
      right: 0;
      top: 20%;
    }
    &.right-bottom {
      right: 0;
      top: 50%;
    }
  }
`;
type LayoutType = {
  size: 'mobile' | 'web';
};
export const Layout: FC<LayoutType> = ({ size }: LayoutType) => {
  const { search } = useLocation();

  const location = useLocation();
  const path = location.pathname.split('/');
  const navLinks = [{ title: 'home', link: '/' }];
  if (path.length === 2) {
    navLinks.push({
      title: path[1],
      link: '#',
    });
  } else if (path.length === 3) {
    navLinks.push({
      title: path[1],
      link: `/${path[1]}`,
    });
  }
  const listTitle = new URLSearchParams(search).get('title');
  if (listTitle) navLinks.push({ title: listTitle, link: location.search });
  return (
    <StyledLayout>
      <Header />
      <TopNav links={navLinks} />
      {size === 'web' && (
        <>
          <div className='dots left'></div>
          <div className='dots right-top'></div>
          <div className='dots right-bottom'></div>
        </>
      )}
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};
