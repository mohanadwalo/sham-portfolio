import React from 'react';

import { Helmet } from 'react-helmet-async';
import Certifications from '../features/certifications/certifications';

const CertificationsPage: React.FC = () => {
  return (
    <>
      <Helmet title='Certifications'>
        <meta
          name='description'
          content='Certifications, Achievement'
          data-react-helmet='true'
        />
      </Helmet>
      <Certifications />
    </>
  );
};
export default CertificationsPage;
