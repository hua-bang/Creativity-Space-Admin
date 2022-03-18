import DashBoard from "../Views/Dashboard";
import { RouteObject } from 'react-router-dom';
import Login from "../Views/Login";
import { ReactElement } from "react";
import { IconApps, IconBook, IconList, IconMenu, IconSwap, IconUser } from "@arco-design/web-react/icon";
import BasicLayout from "@/components/Layouts/BasicLayouts";
import UserList from "@/Views/User-Manager/List";
import BookletList from "@/Views/Booklet-Manager/List";
import ArticleList from "@/Views/Article-Manager/List";
import PointList from "@/Views/Point-Manager/List";
import AdminList from "@/Views/Admin-Manager/List";

export interface RouteConfig extends RouteObject {
  auth?: string | string[];
  redirectPath?: string;
  title: string | ReactElement;
  hidden?: boolean;
  children?: RouteConfig[];
  routerKey?: string;
}

const routes: RouteConfig[] = [
  {
    path: '/dashBoard/*',
    element: <BasicLayout />,
    // auth: ['admin'],
    redirectPath: 'home',
    title: (<> <IconApps />DashBoard</>),
    routerKey: 'BasicLayout',
    children: [
      {
        path: '/workplace',
        title: '控制台',
        element:<DashBoard />
      }
    ]
  },
  {
    path: '/user-manage/*',
    element: <BasicLayout />,
    title: (<><IconUser />用户管理</>),
    routerKey: 'BasicLayout',
    children: [
      {
        path: '/user-list',
        title: '用户列表',
        element: <UserList />
      },
    ] 
  },
  {
    path: '/login',
    element: <Login />,
    title: 'Login',
    hidden: true
  },
  {
    path: '/booklet-manage/*',
    element: <BasicLayout />,
    title: (<><IconBook />小册管理</>),
    routerKey: 'BasicLayout',
    children: [
      {
        path: '/booklet-list',
        title: '小册列表',
        element: <BookletList />
      },
    ] 
  },
  {
    path: '/article-manage/*',
    element: <BasicLayout />,
    routerKey: 'BasicLayout',
    title: (<><IconList />文章管理</>),
    children: [
      {
        path: '/article-list',
        title: '文章列表',
        element: <ArticleList />
      }
    ]
  },
  {
    path: '/point-manage/*',
    element: <BasicLayout />,
    routerKey: 'BasicLayout',
    title: (<><IconSwap />动态管理</>),
    children: [
      {
        path: '/point-list',
        title: '动态列表',
        element: <PointList />
      }
    ]
  },  
  {
    path: '/admin-manage/*',
    element: <BasicLayout />,
    routerKey: 'BasicLayout',
    title: (<><IconMenu />管理员管理</>),
    children: [
      {
        path: '/admin-list',
        title: '管理员列表',
        element: <AdminList />
      }
    ]
  },
];


export default routes;