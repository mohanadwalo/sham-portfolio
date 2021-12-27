import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { LinkType } from '../../../types/mainNav';

const StyledNav = styled.div<Omit<NavType, 'links' | 'renderSubNav'>>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-grow: ${(props) => (props.takeAvailableSpace ? 1 : 0)};
  align-items: center;
  ul {
    display: flex;
    flex-direction: ${(props) => props.direction};
    flex-grow: ${(props) => (props.takeAvailableSpace ? 1 : 0)};
    justify-content: ${(props) => props.justifyContent};
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      padding: 0.2rem 0;
      a {
        ${(props) => props.theme.fonts[props.font || 'buttonOrLink']};
        color: ${(props) => props.color};
        text-transform: ${(props) => props.textTransform};
        text-decoration: none;
        display: flex;
        align-items: center;
        position: relative;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        &.active {
          color: ${(props) => props.activeColor};
        }
      }
      .parent-link {
        ${(props) => props.theme.fonts.buttonOrLink};
        color: ${(props) => props.theme.colors.primaryDark};
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        :before {
          content: '';
          position: absolute;

          width: 0;
          height: 0;
        }
        &.closed:before {
          left: -11px;
          top: -2px;
          border-top: 7px solid transparent;
          border-bottom: 7px solid transparent;
          border-left: 7px solid ${(props) => props.theme.colors.primaryDark};
        }
        &.open:before {
          left: -15px;
          top: 1px;
          border-left: 7px solid transparent;
          border-right: 7px solid transparent;
          border-top: 7px solid ${(props) => props.theme.colors.primaryDark};
        }
      }

      .children {
        a {
          ${(props) => props.theme.fonts.subNavLink}
          padding: 0.2rem 1rem;
          text-transform: capitalize;
        }
        &.hide {
          display: none;
        }
      }
    }
  }
  img {
    margin-right: 1rem;
  }
`;

type NavType = {
  links: LinkType[];
  renderSubNav?: boolean;
  direction: 'column' | 'row';
  justifyContent: 'flex-start' | 'space-around';
  takeAvailableSpace: boolean;
  color?: string;
  activeColor?: string;
  textTransform?: 'capitalize' | 'uppercase';
  font?: 'buttonOrLink' | 'subNavLink';
};

export const Nav: FC<NavType> = ({
  links,
  renderSubNav = false,
  direction,
  justifyContent,
  takeAvailableSpace,
  color = '#fff',
  activeColor = '#6EC8E6',
  textTransform = 'uppercase',
  font = 'buttonOrLink',
}) => {
  const parentLinkState = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    const parentLink = e.target as HTMLSpanElement;
    if (parentLink.classList.contains('closed')) {
      parentLink.classList.remove('closed');
      parentLink.classList.add('open');

      parentLink.nextElementSibling?.classList.remove('hide');
    } else {
      parentLink.classList.remove('open');
      parentLink.classList.add('closed');

      parentLink.nextElementSibling?.classList.add('hide');
    }
  };
  return (
    <StyledNav
      direction={direction}
      takeAvailableSpace={takeAvailableSpace}
      justifyContent={justifyContent}
      textTransform={textTransform}
      color={color}
      activeColor={activeColor}
      font={font}
    >
      <ul>
        {links.map((link, index) => (
          <li key={`main_nav_link_${index}`}>
            {!link.children || !renderSubNav || link.children?.length === 0 ? (
              <NavLink
                className={({ isActive }) => (isActive ? 'active' : '')}
                to={link.link}
              >
                {link.title}
              </NavLink>
            ) : (
              <span
                className='parent-link closed'
                onClick={(e) => parentLinkState(e)}
              >
                {link.title}
              </span>
            )}
            {renderSubNav && link.children && (
              <div className='children hide'>
                {link.children.map((child) => (
                  <NavLink
                    key={`child_${child.title}`}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    to={`${link.link}/${
                      child.id ? child.id : child.title
                    }?title=${child.title}`}
                  >
                    {child.title}
                  </NavLink>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};
