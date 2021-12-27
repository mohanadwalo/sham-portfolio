import aboutPageDefaultIcon from '../../assets/svgs/about/about-default.svg';
import styled from 'styled-components';

const StyledIndex = styled.div`
  ${(props) => props.theme.about}
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  .title {
    ${(props) => props.theme.fonts.h3}
    display: flex;
  }
  .future-bg {
    display: flex;
  }
`;

const AboutIndex: React.FC = () => {
  return (
    <StyledIndex>
      <div className='title'>
        Sharing your experience and educational history can help people learn
        more about you. This will clarify many of the questions people need to
        ask when they are interested in contacting you.
      </div>
      <div className='future-bg'>
        <img src={aboutPageDefaultIcon} alt='future' />
      </div>
    </StyledIndex>
  );
};

export default AboutIndex;
