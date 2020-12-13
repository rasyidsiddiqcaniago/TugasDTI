import {
  Home,
  Profile,
  Contact,
  Login,
  ProfileId,
  InfoCorona,
  DetailDate,
  Product,
  DetailProduct,
} from '../pages';

const routes = [
  {
    path: '/product/:id',
    component: DetailProduct,
    isPublic: false,
  },
  {
    path: '/product',
    component: Product,
    isPublic: false,
  },
  {
    path: '/profile/:profileId',
    component: ProfileId,
    isPublic: false,
  },
  {
    path: '/profile',
    component: Profile,
    isPublic: false,
  },
  {
    path: '/contact',
    component: Contact,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/infoCorona/:dateId',
    component: DetailDate,
    isPublic: true,
  },
  {
    path: '/infoCorona',
    component: InfoCorona,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
