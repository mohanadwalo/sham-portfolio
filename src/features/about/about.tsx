import styled from 'styled-components';

import { Outlet, useLocation } from 'react-router-dom';
import { TwoColumnLayout } from '../../components/shared/twoColumnLayout';
import { Nav } from '../../components/shared/nav/nav';
import educationLargeIcon from '../../assets/svgs/about/education-large.svg';
import experienceLargeIcon from '../../assets/svgs/about/experience-large.svg';

const StyledAbout = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
`;

const About: React.FC = () => {
  const location = useLocation();
  const tabs = location.pathname.split('/');
  const currentTab = tabs[tabs.length - 1] as 'experience' | 'education';
  return (
    <TwoColumnLayout
      leftContent={
        <>
          <Nav
            direction='column'
            takeAvailableSpace={false}
            justifyContent='flex-start'
            font='subNavLink'
            textTransform='capitalize'
            links={[
              {
                title: 'experience',
                link: '/about/experience?title=experience',
              },
              { title: 'education', link: '/about/education?title=education' },
            ]}
          />
          <div className='large-icon-bottom'>
            {tabs.length > 2 && (
              <img
                src={
                  currentTab === 'education'
                    ? educationLargeIcon
                    : experienceLargeIcon
                }
                alt='education'
              />
            )}
          </div>
        </>
      }
    >
      <StyledAbout>
        <Outlet />
      </StyledAbout>
    </TwoColumnLayout>
  );
};

export default About;
