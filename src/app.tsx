import { FC } from 'react';

import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';

import { HomePage } from './pages/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  mobileTheme,
  webTheme,
  Layout,
} from './components/shared/layout/index';
import ProjectsPage from './pages/projectsPage';
import Project from './features/projects/project';
import ProjectsIndex from './features/projects/index';
import BlogsPage from './pages/blogsPage';
import Blog from './features/blogs/blog';
import BlogsIndex from './features/blogs/index';
import AboutPage from './pages/aboutPage';
import AboutIndex from './features/about/index';
import Experience from './features/about/experience';
import Education from './features/about/education';
import ServicesPage from './pages/servicesPage';
import CertificationsPage from './pages/certificationsPage';
import ContactPage from './pages/contactPage';
import NoMatchPage from './pages/noMatchPage';
import { useWindowWidth } from './hooks/windowWidth';
import { designThreshold } from './constants/designThreshold';

const App: FC = () => {
  const size = useWindowWidth();
  console.log(size, designThreshold);
  return (
    <>
      <ThemeProvider theme={size <= designThreshold ? mobileTheme : webTheme}>
        <HelmetProvider>
          <Router>
            <Routes>
              <Route
                path='/'
                element={
                  <Layout size={size <= designThreshold ? 'mobile' : 'web'} />
                }
              >
                <Route index element={<HomePage />} />
                <Route path='projects' element={<ProjectsPage />}>
                  <Route index element={<ProjectsIndex />} />
                  <Route path=':projectId' element={<Project />} />
                </Route>
                <Route path='about' element={<AboutPage />}>
                  <Route index element={<AboutIndex />} />
                  <Route path='experience' element={<Experience />} />
                  <Route path='education' element={<Education />} />
                </Route>
                <Route path='blogs' element={<BlogsPage />}>
                  <Route index element={<BlogsIndex />} />
                  <Route path=':blogId' element={<Blog />} />
                </Route>
                <Route path='services' element={<ServicesPage />} />
                <Route path='certifications' element={<CertificationsPage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='*' element={<NoMatchPage />} />
              </Route>
            </Routes>
          </Router>
        </HelmetProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
