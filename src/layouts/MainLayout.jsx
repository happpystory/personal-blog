
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';


const pageTitles = {
  '/': 'Welcome',
  '/about': 'About me',
  '/projects': 'My projects',
  '/thoughts': 'My thoughts',
  '/contact': 'Contact',
};

function MainLayout() {
  const location = useLocation();

  const title = pageTitles[location.pathname] || '@Tisho';

  return (
    <>
      <Navbar />
      <PageTitle title={title} />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
