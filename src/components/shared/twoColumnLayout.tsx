import { FC } from 'react';

import styled from 'styled-components';

const StyledTwoColumnLayout = styled.div`
  ${(props) => props.theme.twoColumnLayout}
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  height: 100%;
  .main-content {
    ${(props) => props.theme.regionSpace}
    display: flex;
    width: 100%;
    flex: 1;
    .left,
    .right {
      position: relative;
    }
    .left {
      width: 14.063rem;
      flex-shrink: 0;
      .fixed {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        position: fixed;
        max-width: 14.063rem;
        .large-icon-bottom {
          padding-top: 25%;
        }
        .large-icon-top {
          padding-bottom: 1rem;
        }
      }
    }
    .right {
      display: flex;
      flex: 1;
    }
  }
`;

type TwoColumnLayoutType = {
  leftContent: React.ReactNode;
  children: React.ReactNode;
};
export const TwoColumnLayout: FC<TwoColumnLayoutType> = ({
  leftContent,
  children,
}: TwoColumnLayoutType) => {
  return (
    <StyledTwoColumnLayout>
      <div className='main-content'>
        <div className='left'>
          <div className='fixed'>{leftContent}</div>
        </div>
        <div className='right'>{children}</div>
      </div>
    </StyledTwoColumnLayout>
  );
};
