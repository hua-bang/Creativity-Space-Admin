import React, { useState } from 'react';
import { Breadcrumb, Layout } from '@arco-design/web-react';
import './BasicLayout.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import MenuNav from './components/Menu-Nav';
import routes, { RouteConfig } from '@/routes';
import Headers from './components/Headers';
const Content = Layout.Content;

const ROUTE_KEY = 'BasicLayout';


const BasicLayout = () => {
  
  const routesForBasicLayout = 
    routes.filter(route => route.routerKey === ROUTE_KEY).reduce((prev:RouteConfig[], curr) => {
      const { children = [] } = curr;
      return [ ...prev, ...children ];
    }, [] as RouteConfig[]);

  return (
    <Layout className='layout-collapse-demo arco-layout-has-sider'>
      <MenuNav />
      <Layout>
        <Headers />
        <Layout style={{ padding: '24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content className="content">
            {/* <Routes>
              {
                routesForBasicLayout.map(route => (
                  <Route path={route.path} key={route.path} element={route.element} />   
                ))
              }
            </Routes> */}
            <Outlet />
          </Content>
          {/* <Footer>power by @Creativity-Space</Footer> */}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;