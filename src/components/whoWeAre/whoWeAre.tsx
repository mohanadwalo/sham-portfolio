import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ProjectsIcon } from '../../assets/svgs/features/projects.svg';
import { ReactComponent as AboutIcon } from '../../assets/svgs/features/about.svg';
import { ReactComponent as BlogsIcon } from '../../assets/svgs/features/blogs.svg';
import { ReactComponent as ServicesIcon } from '../../assets/svgs/features/services.svg';
import { ReactComponent as CertificationsIcon } from '../../assets/svgs/features/certifications.svg';
import { ReactComponent as ContactIcon } from '../../assets/svgs/features/contact.svg';

const StyledWhoweare = styled.section`
  ${(props) => props.theme.whoWeAre};
  display: flex;
  width: 100%;
  flex-direction: column;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  .wrapper {
    display: flex;
    flex-direction: column;
    .title {
      display: flex;
      ${(props) => props.theme.fonts.h2Bold}
      color:${(props) => props.theme.colors.white};
      align-items: center;

      text-transform: capitalize;
      .line {
        display: inline-block;
        height: 5px;
        background-color: ${(props) => props.theme.colors.white};
        width: 2rem;
        border-radius: 20px;
      }
    }
    .items-group {
      display: flex;
      align-items: center;
      .item {
        background: ${(props) => props.theme.colors.white};
        cursor: pointer;
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
          ${(props) => props.theme.titleSpaceTopBottom}
          color: ${(props) => props.theme.colors.primaryDark};
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const WhoWeAre: React.FC = () => {
  const navigate = useNavigate();
  return (
    <StyledWhoweare>
      <div className='background'></div>
      <div className='wrapper'>
        <div className='title'>
          <span className='line'></span>
          Who Am I? <span className='line'></span>
        </div>
        <div className='items-group'>
          <div className='item projects' onClick={() => navigate('/projects')}>
            <div className='icon'>
              <ProjectsIcon />
            </div>
            <div className='name'>projects</div>
          </div>
          <div className='item about' onClick={() => navigate('/about')}>
            <div className='icon '>
              <AboutIcon />
            </div>
            <div className='name'>about</div>
          </div>
          <div className='item' onClick={() => navigate('/blogs')}>
            <div className='icon '>
              <BlogsIcon />
            </div>
            <div className='name'>blogs</div>
          </div>
          <div className='item' onClick={() => navigate('/services')}>
            <div className='icon '>
              <ServicesIcon />
            </div>
            <div className='name'>services</div>
          </div>
          <div
            className='item certifications'
            onClick={() => navigate('/certifications')}
          >
            <div className='icon '>
              <CertificationsIcon />
            </div>
            <div className='name'>certifications</div>
          </div>
          <div className='item contact' onClick={() => navigate('/contact')}>
            <div className='icon '>
              <ContactIcon />
            </div>
            <div className='name'>contact</div>
          </div>
        </div>
      </div>
    </StyledWhoweare>
  );
};
