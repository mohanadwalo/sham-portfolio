import { Brand } from '../features/brand/brand';
import { Highlight } from '../components/highlight/highlight';
import { WhoWeAre } from '../components/whoWeAre/whoWeAre';
import { Helmet } from 'react-helmet-async';

export const HomePage: React.FC = () => {
  return (
    <>
      <Helmet title='Home'>
        <meta
          name='description'
          content='Brand, Highlight, Portfolio, Profile, Features, Services, Projects, Contact, About, Education, Experience'
          data-react-helmet='true'
        />
      </Helmet>
      <Brand />
      <Highlight />
      <WhoWeAre />
    </>
  );
};
