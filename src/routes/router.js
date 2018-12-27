import React, {Component} from 'react'
import { Route, Router } from 'react-router-dom'
import Login from '../auth/login'
import Home from '../home/home'
import Registry from '../auth/register'
import ChangeInfo from '../auth/change-ifno'
import MyClues from '../clue/myClues'
import ClueDetail from '../clue/detail'
import ClueEdit from '../clue/edit'
import CreateClue from '../clue/create'

import MyFollow from '../follow/myFollow'
import FollowDetail from '../follow/detail'
import FollowEdit from '../follow/edit'
import FollowCreate from '../follow/create'

import MyOrder from '../order/myOrder'
import OrderDetail from '../order/detail'
import OrderEdit from '../order/edit'
import OrderCreate from '../order/create'
// 鉴权路由
let authorizedRoutes = [
  {
    path: '/',
    component: Home
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
  },
  {
    path: '/myfollow',
    component: MyFollow
  },
  {
    path: '/myfollow/detail/:id',
    component: FollowDetail
  },
  {
    path: '/myfollow/edit/:id',
    component: FollowEdit
  },
  {
    path: '/myfollow/create',
    component: FollowCreate
  },
  {
    path: '/myorder',
    component: MyOrder
  },
  {
    path: '/myorder/detail/:id',
    component: OrderDetail
  },
  {
    path: '/myorder/edit/:id',
    component: OrderEdit
  },
  {
    path: '/myorder/create',
    component: OrderCreate
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