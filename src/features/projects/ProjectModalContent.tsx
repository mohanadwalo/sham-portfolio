import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/svgs/shared/arrow.svg';

const StyledModal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .image-text-wrapper {
    img {
      width: 100%;
      height: 100%;
    }
    .description {
      ${(props) => props.theme.fonts.body}
      padding-top: 1rem;
    }
  }
  .prevNext {
    position: absolute;
    top: 42%;
    cursor: pointer;
    &.prev {
      left: -2rem;
      svg {
        transform: rotate(180deg) scale(2.5);
      }
    }
    &.next {
      right: -2rem;
      transform: scale(2.5);
    }
  }
`;

type ProjectModalType = {
  children: React.ReactNode;
  setPrevNextSlide: (type: 'next' | 'prev') => void;
  currentSlide: number;
  totalSlides: number;
};
const ProjectModalContent: React.FC<ProjectModalType> = ({
  children,
  setPrevNextSlide,
  currentSlide,
  totalSlides,
}: ProjectModalType) => {
  return (
    <StyledModal>
      {children}
      <div className='prevNext prev'>
        {currentSlide > 0 && (
          <ArrowIcon onClick={() => setPrevNextSlide('prev')} />
        )}
      </div>
      <div className='prevNext next'>
        {currentSlide < totalSlides && (
          <ArrowIcon onClick={() => setPrevNextSlide('next')} />
        )}
      </div>
    </StyledModal>
  );
};
export default ProjectModalContent;
