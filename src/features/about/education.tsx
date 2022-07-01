import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getAboutFromApi, selectAllAbout } from './aboutSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useEffect } from 'react';

const StyledEducation = styled.div`
  ${(props) => props.theme.about}
  display: flex;
  flex-direction: column;
  flex: 1;
  .education {
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
      .university {
        .title {
          ${(props) => props.theme.fonts.h4}
          color: ${(props) => props.theme.colors.primary};

          text-transform: capitalize;
          .subtitle {
            ${(props) => props.theme.fonts.h5}
            color: ${(props) => props.theme.colors.white};
            ${(props) => props.theme.titleSpaceTopBottom}
          }
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
      .university .description,
      .projects .projects-list,
      .tasks .tasks-list,
      .courses .courses-list {
        ${(props) => props.theme.fonts.body}
        ${(props) => props.theme.bodySpace}
      }
      .projects-list {
        a {
          text-transform: capitalize;
          color: inherit;
          margin: 5px;
        }
      }
      .courses-list {
        display: flex;
        flex-wrap: wrap;
        span {
          border: 1px solid ${(props) => props.theme.colors.primaryLight};
          border-radius: 1.25rem;
          padding: 0.5rem 1rem;
          flex-shrink: 0;
          flex-grow: 0;
          margin: 5px;
        }
      }
    }
  }
`;

const Education: React.FC = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectAllAbout);

  useEffect(() => {
    if (data.status === 'pending') dispatch(getAboutFromApi());
  }, [data.status, dispatch]);

  return (
    <StyledEducation>
      {data.about.education.map((edu) => (
        <div key={edu.id} className='education'>
          <div className='time-line'>
            <div className='start-date'></div>
            <div className='location'>{edu.location}</div>
            <div className='path'>
              <div className='start'>{edu.startDate.toDateString()}</div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='middle'></div>
              <div className='circle end'>{edu.endDate.toDateString()}</div>
            </div>
          </div>
          <div className='details'>
            <div className='university'>
              <div className='title'>
                {edu.subject}
                <div className='subtitle'>{edu.university}</div>
              </div>
              <div className='description'>{edu.description}</div>
            </div>
            <div className='projects'>
              <div className='title'>projects</div>
              <div className='projects-list'>
                {edu.projects.map((project) => (
                  <Link
                    key={`${edu.id}_${project.id}`}
                    to={`/projects/${project.id}`}
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className='courses'>
              <div className='title'>courses</div>
              <div className='courses-list'>
                {edu.courses.map((course) => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </StyledEducation>
  );
};
export default Education;
