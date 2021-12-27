import { Helmet } from 'react-helmet-async';

import About from '../features/about/about';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet title='About'>
        <meta
          name='description'
          content='About, Experience, Education, Skills, Projects, Courses'
          data-react-helmet='true'
        />
      </Helmet>
      <About />
    </>
  );
};
export default AboutPage;
