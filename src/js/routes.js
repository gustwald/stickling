import Root from './components/Root/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AdsPage from './pages/AdsPage';

export default {
  component: Root,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/profile',
      component: ProfilePage
    },
    {
      path: '/ads',
      component: AdsPage
    }
  ]
};
