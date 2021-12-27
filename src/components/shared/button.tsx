import styled from 'styled-components';

const StyledButton = styled.div<{ padding: string; minWidth: string }>`
  ${(props) => props.theme.button}
  display: flex;
  align-items: center;
  button {
    ${(props) => props.theme.fonts.buttonOrLink}
    padding: ${(props) => props.padding};
    min-width: ${(props) => props.minWidth};
    cursor: pointer;
    text-transform: uppercase;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`;

type ButtonType = {
  title: string;
  padding?: string;
  minWidth?: string;
  className:
    | 'primary'
    | 'white-fill'
    | 'outline'
    | 'tag'
    | 'tag active'
    | 'course';
  type?: 'button' | 'submit';
  action?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
export const Button: React.FC<ButtonType> = ({
  title,
  padding = '0.6rem 1rem',
  minWidth = '9rem',
  className,
  type = 'button',
  action,
}: ButtonType) => {
  return (
    <StyledButton padding={padding} minWidth={minWidth}>
      {type === 'button' && action ? (
        <button className={className} onClick={(e) => action(e)} type={type}>
          {title}
        </button>
      ) : (
        <button className={className} type={type}>
          {title}
        </button>
      )}
    </StyledButton>
  );
};
