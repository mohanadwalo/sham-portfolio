import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/svgs/shared/close.svg';

const StyledModal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
  background-color: ${(props) => props.theme.colors.primaryDark};
  padding: 3rem;
  .body {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .close {
    position: absolute;
    top: 3rem;
    right: 3rem;
    cursor: pointer;
  }
`;

type ModalType = {
  children: React.ReactNode;
  onClose: (status: boolean) => void;
};
export const Modal: React.FC<ModalType> = ({
  children,
  onClose,
}: ModalType) => {
  return (
    <StyledModal>
      <div className='close' onClick={() => onClose(false)}>
        <CloseIcon fill='white' />
      </div>
      <div className='body'>{children}</div>
    </StyledModal>
  );
};
