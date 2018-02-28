import Root from './components/Root/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AdsPage from './pages/AdsPage';
import MapPage from './pages/MapPage';

export default {
  component: Root,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/user',
      childRoutes: [
        {
          path: ':userId',
          component: ProfilePage
        }
      ],
      component: ProfilePage
    },
    {
      path: '/annonser',
      component: AdsPage
    },
    {
      path: '/karta',
      component: MapPage
    }
  ]
};
