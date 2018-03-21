import Root from './components/Root/Root';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import AdsPage from './pages/AdsPage/AdsPage';
import MapPage from './pages/MapPage/MapPage';
import SingleAdPage from './pages/SingleAdPage/SingleAdPage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

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
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
};
