import { FC } from 'react';

import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../../../assets/svgs/shared/logo.svg';

const StyledLogo = styled.div<{ color: string }>`
  ${(props) => props.theme.logo}
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .name {
    color: ${(props) => props.color};
  }
  svg {
    margin-right: 0.5rem;
  }
`;

type LogoType = {
  color: string;
};
export const Logo: FC<LogoType> = ({ color }: LogoType) => {
  return (
    <StyledLogo color={color}>
      <LogoIcon fill={color} />
      <div className='name'>Sham</div>
    </StyledLogo>
  );
};
