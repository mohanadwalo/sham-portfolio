import styled from 'styled-components';

import facebookIcon from '../../../assets/svgs/shared/facebook.svg';
import twitterIcon from '../../../assets/svgs/shared/twitter.svg';
import linkedinIcon from '../../../assets/svgs/shared/linkedin.svg';
import youtubeIcon from '../../../assets/svgs/shared/youtube.svg';
import gmailIcon from '../../../assets/svgs/shared/gmail.svg';

const StyledFooter = styled.section`
  ${(props) => props.theme.footer}
  position: absolute;
  bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  left: 0;
  right: 0;
  a {
    display: flex;
    margin: 0 0.5rem;
    &.facebook {
      background-image: url(${facebookIcon});
    }
    &.twitter {
      background-image: url(${twitterIcon});
    }
    &.linkedin {
      background-image: url(${linkedinIcon});
    }
    &.youtube {
      background-image: url(${youtubeIcon});
    }
    &.gmail {
      background-image: url(${gmailIcon});
    }
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <a title='facebook' className='facebook' href='#'></a>
      <a title='twitter' className='twitter' href='#'></a>
      <a title='linkedin' className='linkedin' href='#'></a>
      <a title='youtube' className='youtube' href='#'></a>
      <a title='gmail' className='gmail' href='#'></a>
    </StyledFooter>
  );
};
