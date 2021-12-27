import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ULlist } from '../../components/shared/ULlist';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';
import { getAboutFromApi, selectAllAbout } from './aboutSlice';

const StyledExperience = styled.div`
  ${(props) => props.theme.about}
  display: flex;
  flex-direction: column;
  flex: 1;
  .experience {
    ${(props) => props.theme.areaMargin}
    display: flex;
    .time-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      .location {
        text-transform: capitalize;
        ${(props) => props.theme.fonts.h6}
      }
      .path {
        ${(props) => props.theme.fonts.small}
        ${(props) => props.theme.titleSpaceTopBottom}
      }
    }

    .details {
      flex: 1;
      .company {
        .name {
          ${(props) => props.theme.fonts.h4}
          color: ${(props) => props.theme.colors.primary};
          text-transform: capitalize;
        }
      }
      .projects .title,
      .tasks .title,
      .courses .title {
        ${(props) => props.theme.fonts.h5}
        display: flex;
        align-items: center;
        text-transform: capitalize;
        position: relative;
        :before {
          position: absolute;
          width: 10px;
          left: 0;
          border-radius: 1.25rem;
          content: '';
          background-color: ${(props) => props.theme.colors.primary};
        }
      }
      .company .description,
      .projects .projects-list,
      .tasks .tasks-list,
      .courses .courses-list {
        ${(props) => props.theme.fonts.body}
        ${(props) => props.theme.bodySpace}
      }
      .projects-list {
        a {
          color: inherit;
          margin: 5px;
        }
      }
    }
  }
`;

const Experience: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllAbout);

  useEffect(() => {
    if (data.status === 'pending') dispatch(getAboutFromApi());
  }, [data.status, dispatch]);

  return (
    <StyledExperience>
      {data.about.experience.map((experience) => (
        <div key={experience.id} className='experience'>
          <div className='time-line'>
            <div className='start-date'></div>
            <div className='location'>{experience.location}</div>
            <div className='path'>
              <div className='start'>{experience.startDate}</div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='circle end'>{experience.endDate}</div>
            </div>
          </div>
          <div className='details'>
            <div className='company'>
              <div className='name'>{experience.companyName}</div>
              <div className='description'>{experience.companyDescription}</div>
            </div>
            <div className='projects'>
              <div className='title'>projects</div>
              <div className='projects-list'>
                {experience.projects.map((project) => (
                  <Link
                    key={`${experience.id}_${project.id}`}
                    to={`/projects/${project.id}`}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className='tasks'>
              <div className='title'>tasks</div>
              <div className='tasks-list'>
                <ULlist>
                  {experience.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ULlist>
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledExperience>
  );
};

export default Experience;
