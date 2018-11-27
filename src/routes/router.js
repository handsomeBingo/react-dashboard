import React, {Component} from 'react'
import { Link, Route, Router } from 'react-router-dom'
import Login from '../auth/login'
import Home from '../home/home'
import SlashPage from '../slash'
import routeConfig from './config.json'
let routes = [
  {
    path: '/login',
    component: Login
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
let mapRoutes = routes.map(
  (route, index) => (<Route key={index} exact path={route.path} component={route.component}></Route>)
)
export default mapRoutes;