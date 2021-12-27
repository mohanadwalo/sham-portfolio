import styled from 'styled-components';

import { ReactComponent as WebDevIcon } from '../../assets/svgs/highlight/webdev.svg';
import { ReactComponent as FrontEndIcon } from '../../assets/svgs/highlight/front-end.svg';
import { ReactComponent as WebDesignIcon } from '../../assets/svgs/highlight/webdesign.svg';
import { ReactComponent as UxuiIcon } from '../../assets/svgs/highlight/uxui.svg';

const StyledHighLight = styled.section`
  ${(props) => props.theme.highlight}
  display: flex;
  flex-direction: column;
  .title,
  .skills {
    display: flex;
    width: 100%;
  }
  .title {
    ${(props) => props.theme.fonts.h2Bold}
    justify-content: center;
    align-items: center;
    .line {
      display: inline-block;
      height: 5px;
      background-color: ${(props) => props.theme.colors.white};
      border-radius: 20px;
    }
  }
  .skills {
    justify-content: space-around;
    .skill {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .name {
        ${(props) => props.theme.fonts.h3}
        text-transform: capitalize;
      }
    }
  }
`;

export const Highlight: React.FC = () => {
  return (
    <StyledHighLight>
      <div className='title'>
        <span className='line'></span>
        HIGHLIGHT
        <span className='line'></span>
      </div>
      <div className='skills'>
        <div className='skill frontend'>
          <div className='icon'>
            <FrontEndIcon />
          </div>
          <div className='name'>front-end</div>
        </div>
        <div className='skill webdesign'>
          <div className='icon '>
            <WebDesignIcon />
          </div>
          <div className='name'>Cloud</div>
        </div>
        <div className='skill uxui'>
          <div className='icon '>
            <UxuiIcon />
          </div>
          <div className='name'>UX/UI</div>
        </div>
        <div className='skill webdev'>
          <div className='icon'>
            <WebDevIcon />
          </div>
          <div className='name'>web development</div>
        </div>
      </div>
    </StyledHighLight>
  );
};
