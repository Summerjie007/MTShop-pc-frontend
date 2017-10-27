import home from '../components/home/home';
import login from '../components/login/login';
import register from '../components/register/register';
import account from '../components/account/account';
import information from '../components/information/information';
import item from '../components/item/item';

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/account',
    name: 'account',
    meta: {
      requireAuth: true
    },
    component: account,
    children: [
      {
        path: 'information',
        name: 'information',
        meta: {
          requireAuth: true
        },
        component: information
      }
    ]
  },
  {
    path: '/item',
    name: 'item',
    component: item
  }
];

export default routes;
