import DashBoard from "../Views/Dashboard";
import { RouteObject } from 'react-router-dom';
import UserPage from "../Views/user-page";
import Login from "../Views/Login";

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
    redirectPath: '/login' 
  },
  {
    path: '/login',
    element: <Login />
  }
];


export default routes;