import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import { TwoColumnLayout } from '../../components/shared/twoColumnLayout';
import blogsLargeIcon from '../../assets/svgs/blogs/blogs-large.svg';

const StyledBlogs = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
`;

const Blogs: React.FC = () => {
  return (
    <TwoColumnLayout
      leftContent={
        <div className='large-icon-top'>
          <img src={blogsLargeIcon} alt='blogs' />
        </div>
      }
    >
      <StyledBlogs>
        <Outlet />
      </StyledBlogs>
    </TwoColumnLayout>
  );
};
export default Blogs;
