import Root from './components/Root/Root';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AdsPage from './pages/AdsPage';
import MapPage from './pages/MapPage';
import SingleAdPage from './pages/SingleAdPage';

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
      path: '/ads',
      component: AdsPage
    },
    {
      path: '/ads/:adId',
      component: SingleAdPage
    },
    {
      path: '/map',
      component: MapPage
    }
  ]
};
