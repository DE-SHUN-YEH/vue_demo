import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/components/main';
import Index from '@/components/index';
import Home from '@/components/home';
import Page from '@/components/pages/page';
import computed from '@/components/pages/computed';
import input from '@/components/pages/input';
import api from '@/components/pages/api';

Vue.use(VueRouter);

export default new VueRouter({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      name: 'index',
      path: '/',
      component: Index
    },
    {
      name: 'main',
      path: '/',
      component: Main,
      children: [
        {
          name: 'home',
          path: '/home',
          component: Home
        },
        {
          name: 'page',
          path: '/page',
          component: Page,
          children: [
            {
              name: 'computed',
              path: '/',
              component: computed
            },
            {
              name: 'input',
              path: 'input',
              component: input
            },
            {
              name: 'api',
              path: 'api',
              component: api
            }
          ]
        }
      ]
    },
  ]
});