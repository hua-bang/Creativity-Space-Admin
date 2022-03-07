import DashBoard from "../views/dashboard";
import { RouteObject } from 'react-router-dom';
import UserPage from "../views/user-page";
import Login from "../views/login";

interface RouteConfig extends RouteObject {
  auth?: string | string[];
  redirectPath?: string;
}

const routes: RouteConfig[] = [
  {
    path: '/dashBoard/*',
    element: <DashBoard />,
    auth: ['admin'],
    redirectPath: 'home'
  },
  {
    path: '/user-page',
    element: <UserPage />,
    auth: ['test'],
    redirectPath: '/login' 
  },
  {
    path: '/login',
    element: <Login />
  }
];


export default routes;