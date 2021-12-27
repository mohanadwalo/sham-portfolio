import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ULlist } from '../../components/shared/ULlist';
import { Modal } from '../../components/shared/modal';
import ProjectModalContent from './ProjectModalContent';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getProjectsFromApi, selectProjectById } from './projectsSlice';
import { useParams } from 'react-router';
import { RootState } from '../../app/store';

const StyledProject = styled.div`
  ${(props) => props.theme.projects}
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  .goals,
  .gallery,
  .development,
  .demo {
    display: flex;
    flex-direction: column;
    .title {
      ${(props) => props.theme.fonts.h4}
      text-transform: capitalize;
    }
    .description,
    .development-list {
      ${(props) => props.theme.fonts.body}
      ${(props) => props.theme.bodySpace}
    }
    .video {
      padding-top: 1rem;
    }
    .gallery-list {
      display: flex;
      flex-wrap: wrap;
      ${(props) => props.theme.bodySpaceTopBottom}
      .image-container {
        display: flex;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        cursor: pointer;

        box-shadow: 0 3px 8px ${(props) => props.theme.colors.primaryVariant3};
        border-radius: 5px;
      }
    }
  }
`;
const Project: React.FC = () => {
  const { projectId } = useParams();
  const dispatch = useAppDispatch();
  const currentProject = useAppSelector((state: RootState) =>
    selectProjectById(state, projectId || '0')
  );

  useEffect(() => {
    if (!currentProject) dispatch(getProjectsFromApi(''));
  }, [currentProject, dispatch]);

  const [modalOptions, setModalOptions] = useState<{
    isOpen: boolean;
    imageIndex: number;
  }>({ isOpen: false, imageIndex: 0 });

  const showModal = (status: boolean, imageIndex?: number) => {
    if (imageIndex) {
      setModalOptions({
        ...modalOptions,
        isOpen: status,
        imageIndex: imageIndex,
      });
    } else setModalOptions({ ...modalOptions, isOpen: status });
  };
  const setPrevNextSlide = (type: 'next' | 'prev') => {
    if (
      type === 'next' &&
      modalOptions.imageIndex <
        (currentProject ? currentProject.gallery.length - 1 : 0)
    ) {
      setModalOptions({
        ...modalOptions,
        imageIndex: modalOptions.imageIndex + 1,
      });
    } else if (type === 'prev' && modalOptions.imageIndex > 0) {
      setModalOptions({
        ...modalOptions,
        imageIndex: modalOptions.imageIndex - 1,
      });
    }
  };
  return (
    <>
      {modalOptions.isOpen && (
        <Modal onClose={showModal}>
          <ProjectModalContent
            setPrevNextSlide={setPrevNextSlide}
            currentSlide={modalOptions.imageIndex}
            totalSlides={currentProject ? currentProject.gallery.length - 1 : 0}
          >
            <div className='image-text-wrapper'>
              <img
                src={currentProject?.gallery[modalOptions.imageIndex].image}
                alt='project'
              />
              <div className='description'>
                {currentProject?.gallery[modalOptions.imageIndex].description}
              </div>
            </div>
          </ProjectModalContent>
        </Modal>
      )}
      <StyledProject>
        <div className='goals'>
          <div className='title'>goals</div>
          <div className='description'>{currentProject?.goals}</div>
        </div>
        <div className='gallery'>
          <div className='title'>gallery</div>
          <div className='gallery-list'>
            {currentProject?.gallery.map((item, index) => (
              <div
                key={`gallery_list_${index}`}
                onClick={() => showModal(true, index)}
                className='image-container'
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
            ))}
          </div>
        </div>
        <div className='development'>
          <div className='title'>development</div>
          <div className='development-list'>
            <ULlist>
              {currentProject?.development.map((dev, i) => (
                <li key={`dev_${i}`}>{dev}</li>
              ))}
            </ULlist>
          </div>
        </div>
        <div className='demo'>
          <div className='title'>demo</div>
          <div className='video'>
            <video width='100%' controls>
              <source src={currentProject?.video} type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </StyledProject>
    </>
  );
};

export default Project;
