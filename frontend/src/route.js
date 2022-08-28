import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

import Index from './components/index'
import User from './components/User'
import Navbar from './components/Navbar'
import Form from './components/users/form'
import Playlist from './components/Playlist.vue'
import Feedback from './components/users/feedback'
import NotFound from './components/NotFound'
import Requests from './components/users/request'
import Home from './components/users/home'
import FrontPage from './components/Guest/home'
import Video from './components/users/Video'

const routes = [
    {
        path: '/user',
        name: 'user',
        component: User,
    },
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/playlist_/:id',
          name: 'playlist_',
          component: Playlist
        },
        {
          path: '/',
          name: 'FrontPage',
          component: FrontPage
        },
      ]
    },
    {
      path: '/nav',
      name: 'nav',
      component: Navbar,
      children: [
        {
          path: '/request',
          name: 'request',
          component: Form,
  
        },
        {
          path: '/home',
          name: 'home',
          component: Home,
        },
        {
          path: '/playlist/:id',
          name: 'playlist',
          component: Playlist,
          props: true
        },
        {
          path: '/video/:id',
          name: 'video',
          component: Video,
        },
        {
          path: '/feedback',
          name: 'feedback',
          component: Feedback,
        },
        {
          path: '/requests',
          name: 'requests',
          component: Requests,
        },
      ]
  },
    {
      path: '*',
      component: NotFound,
  },
  {
    path: '/Invalid',
    name: 'invalid',
    component: NotFound,
  },
  ]
  
  
const router = new Router(
    {
      mode: 'history',   
      routes,
    }
  )

export default router