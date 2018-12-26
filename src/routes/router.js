import React, {Component} from 'react'
import { Link, Route, Router } from 'react-router-dom'
import Login from '../auth/login'
import Home from '../home/home'
import SlashPage from '../slash'
import Registry from '../auth/register'
import ChangeInfo from '../auth/change-ifno'
import MyClues from '../clue/myClues'
import ClueDetail from '../clue/detail'
import ClueEdit from '../clue/edit'
import CreateClue from '../clue/create'
// 鉴权路由
let authorizedRoutes = [
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
  },
  {
    path: '/changeInfo',
    component: ChangeInfo
  },
  {
    path: '/myclue',
    component: MyClues
  },
  {
    path: '/myclue/detail/:id',
    component: ClueDetail
  },
  {
    path: '/myclue/edit/:id',
    component: ClueEdit
  },
  {
    path: '/myclue/create',
    component: CreateClue
  }
]
// 非鉴权路由
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