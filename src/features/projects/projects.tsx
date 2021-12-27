import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import { TwoColumnLayout } from '../../components/shared/twoColumnLayout';
import { Nav } from '../../components/shared/nav/nav';
import projectsLargeIcon from '../../assets/svgs/projects/projects-large.svg';
import { useAppSelector } from '../../app/hooks';
import { ProjectsState, selectAllProjects } from './projectsSlice';

const StyledProjects = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const Projects: React.FC = () => {
  const data: Omit<ProjectsState, 'image'> = useAppSelector(selectAllProjects);

  return (
    <TwoColumnLayout
      leftContent={
        <>
          <div className='large-icon-top'>
            <img src={projectsLargeIcon} alt='projects' />
          </div>

          <Nav
            direction='column'
            takeAvailableSpace={false}
            justifyContent='flex-start'
            textTransform='capitalize'
            links={data.projects.map((project) => ({
              title: project.title,
              link: `${project.id}?title=${project.title}`,
            }))}
          />
        </>
      }
    >
      <StyledProjects>
        <Outlet />
      </StyledProjects>
    </TwoColumnLayout>
  );
};
export default Projects;
