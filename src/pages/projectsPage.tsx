import { Helmet } from 'react-helmet-async';

import Projects from '../features/projects/projects';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet title='Projects'>
        <meta
          name='description'
          content='Portfolio, inventory, e-commerce, kids space'
          data-react-helmet='true'
        />
      </Helmet>
      <Projects />
    </>
  );
};
export default ProjectsPage;
