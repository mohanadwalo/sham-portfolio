import React from 'react';

import { Helmet } from 'react-helmet-async';
import Contact from '../components/contact/contact';

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet title='Contact'>
        <meta
          name='description'
          content='Contact, Message'
          data-react-helmet='true'
        />
      </Helmet>
      <Contact />
    </>
  );
};
export default ContactPage;
