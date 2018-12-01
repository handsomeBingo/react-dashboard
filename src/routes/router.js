import React, {Component} from 'react'
import { Link, Route, Router } from 'react-router-dom'
import Login from '../auth/login'
import Home from '../home/home'
import SlashPage from '../slash'
import routeConfig from './config.json'
import Registry from '../auth/register'
let authorizedRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/slash',
    component: SlashPage
  }
]
let unauthorizedRoutes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registry',
    component: Registry
  }
]
export const  mapExcludeLoginRoutes = authorizedRoutes.map(
  (route, index) => (<Route key={index} exact path={route.path} component={route.component}></Route>)
);

export const loginRouter =unauthorizedRoutes.map(
  (route, index) => (<Route key={index} exact path={route.path} component={route.component}></Route>)
);