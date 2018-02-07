import Root from './components/Root/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

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
    }
  ]
};
