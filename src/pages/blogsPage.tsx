import React from 'react';
import { Helmet } from 'react-helmet-async';

import Blogs from '../features/blogs/blogs';

export const BlogsPage: React.FC = () => {
  return (
    <>
      <Helmet title='Blogs'>
        <meta
          name='description'
          content='Blogs, Skills'
          data-react-helmet='true'
        />
      </Helmet>
      <Blogs />
    </>
  );
};

export default BlogsPage;
