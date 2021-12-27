import { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ResultMessage } from '../../components/shared/resultMessage';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getProjectsFromApi, selectAllProjects } from './projectsSlice';

const StyledProjects = styled.div`
  ${(props) => props.theme.projects}
  .search {
    ${(props) => props.theme.input}
    input {
      ${(props) => props.theme.fonts.body}
    }
  }
  .message,
  .projects-list {
    ${(props) => props.theme.bodySpaceTopBottom}
  }
  .message {
    ${(props) => props.theme.fonts.h4}
  }
  .projects-list {
    display: flex;
    flex-wrap: wrap;
    .project-container {
      display: flex;
      flex-wrap: wrap;

      .project {
        cursor: pointer;
        flex-shrink: 0;
        .image-container {
          height: 15.75rem;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          box-shadow: 0 3px 8px ${(props) => props.theme.colors.primaryVariant3};
          border-radius: 5px;
        }
        .title {
          ${(props) => props.theme.fonts.h4}
          position: relative;
          text-transform: capitalize;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          :before {
            position: absolute;
            width: 10px;
            left: 0px;
            border-radius: 1.25rem;
            content: '';
            background-color: ${(props) => props.theme.colors.primary};
          }
        }
      }
    }
  }
`;

const ProjectsIndex: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllProjects);
  useEffect(() => {
    if (data.status === 'pending') dispatch(getProjectsFromApi(''));
  }, [data.status]);

  const navigate = useNavigate();
  return (
    <StyledProjects>
      <div className='search'>
        <input
          type='text'
          className='search-input'
          onChange={(e) => dispatch(getProjectsFromApi(e.target.value))}
          placeholder='Search for a keyword'
        />
      </div>
      <div className='message'>
        In our career, we experienced different types of projects. We are always
        happy to solve our customers&apos; problems.
        <br />
        <br />
        We guarantee product quality by writing unit test which helps to find
        out problems that may occur in production. In addition our team conducts
        user testing for a better user experience and ensures that there are no
        pain points.
        <br />
        <br />
        Building highly available and scalable APIs that can serve millions of
        users without slowing down is the key that measures product performance
        and we always keep that in our mind.
      </div>
      <div className='projects-list'>
        {data.projects.map((project) => (
          <div
            key={`projects_list_${project.id}`}
            onClick={() =>
              navigate(`/projects/${project.id}?title=${project.title}`)
            }
            className='project-container'
          >
            <div className='project'>
              <div
                className='image-container'
                style={{ backgroundImage: `url(${project.icon})` }}
              ></div>
              <div className='title'>{project.title}</div>
            </div>
          </div>
        ))}
        {data.projects.length <= 0 && (
          <ResultMessage
            color='fail'
            message='There is no data that matches the search text.'
          />
        )}
      </div>
    </StyledProjects>
  );
};

export default ProjectsIndex;
