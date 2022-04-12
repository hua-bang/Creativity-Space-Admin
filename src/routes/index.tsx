import DashBoard from "../Views/Dashboard";
import { Navigate, Route, RouteObject } from 'react-router-dom';
import Login from "../Views/Login";
import { ReactElement } from "react";
import { IconApps, IconBook, IconList, IconMenu, IconSwap, IconUser } from "@arco-design/web-react/icon";
import BasicLayout from "@/components/Layouts/BasicLayouts";
import UserList from "@/Views/User-Manager/List";
import BookletList from "@/Views/Booklet-Manager/List";
import ArticleList from "@/Views/Article-Manager/List";
import PointList from "@/Views/Point-Manager/List";
import AdminList from "@/Views/Admin-Manager/List";
import AuthWrapper from "@/components/Auth/AuthWrapper";

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
    path: '/',
    element: <Navigate to="/dashBoard/workplace" />,
    title: '首页',
    hidden: true
  },
  {
    path: '/dashBoard',
    element: <BasicLayout />,
    // auth: ['admin'],o'
    title: (<> <IconApps />DashBoard</>),
    routerKey: 'BasicLayout',
    children: [
      {
        path: 'workplace',
        title: '控制台',
        element:<DashBoard />,
        auth: ['admin', 'super'],
      }
    ],
  },
  {
    path: '/user-manage',
    element: <BasicLayout />,
    title: (<><IconUser />用户管理</>),
    routerKey: 'BasicLayout',
    children: [
      {
        path: 'user-list',
        title: '用户列表',
        element: <UserList />
      },
    ], 
  },
  {
    path: '/login',
    element: <Login />,
    title: 'Login',
    hidden: true
  },
  {
    path: '/booklet-manage',
    element: <BasicLayout />,
    title: (<><IconBook />小册管理</>),
    routerKey: 'BasicLayout',
    auth: ['admin', 'super'],
    children: [
      {
        path: 'booklet-list',
        title: '小册列表',
        element: <BookletList />
      },
    ] 
  },
  {
    path: '/article-manage',
    element: <BasicLayout />,
    routerKey: 'BasicLayout',
    title: (<><IconList />文章管理</>),
    children: [
      {
        path: 'article-list',
        title: '文章列表',
        element: <ArticleList />
      }
    ]
  },
  {
    path: '/point-manage',
    element: <BasicLayout />,
    routerKey: 'BasicLayout',
    title: (<><IconSwap />动态管理</>),
    children: [
      {
        path: 'point-list',
        title: '动态列表',
        element: <PointList />
      }
    ]
  },  
  {
    path: '/admin-manage',
    element: <BasicLayout />,
    routerKey: 'BasicLayout',
    auth: ['admin', 'super'],
    title: (<><IconMenu />管理员管理</>),
    children: [
      {
        path: 'admin-list',
        title: '管理员列表',
        element: <AdminList />
      }
    ]
  },
];

export const generateRouter = (routes: RouteConfig[]) => {
  return routes.map((route, index) => {
    const { auth, path, element, redirectPath, children } = route;

    return ( children && children.length > 0 ) 
      ? (
        <Route 
          key={path}
          path={path}
          element={
            auth 
              ? (
                <AuthWrapper key={path} auth={auth} redirectPath={redirectPath}>
                  {element as ReactElement<any, any>}
                </AuthWrapper>
              ) :
                element
              }
            >
              {generateRouter(children)}
        </Route>
      ) : (
        <Route 
          key={path}
          path={path}
          element={
            auth 
              ? (
                <AuthWrapper key={path} auth={auth} redirectPath={redirectPath}>
                  {element as ReactElement<any, any>}
                </AuthWrapper>
            ) :
              element
          }
        />
    );
  });
}

export default routes;