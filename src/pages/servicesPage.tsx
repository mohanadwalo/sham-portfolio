import React from 'react';

import Services from '../features/services/services';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
  return (
    <>
      <Helmet title='Services'>
        <meta
          name='description'
          content='UX/UI, Web development, Hosting, Mobile development, Swift, Kotlin, React native'
          data-react-helmet='true'
        />
      </Helmet>
      <Services />
    </>
  );
};

export default ServicesPage;
