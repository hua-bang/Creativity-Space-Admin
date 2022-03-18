import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb, Button, Message } from '@arco-design/web-react';
import { IconApps, IconBug, IconCaretRight, IconCaretLeft, IconBulb } from '@arco-design/web-react/icon';
import './BasicLayout.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Views/Dashboard/subViews/home';
import Demo from '../../Views/Dashboard/subViews/demo';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const MenuItemGroup = Menu.ItemGroup;

const BasicLayout = () => {

  const [collapsed, setCollapsed] = useState(true);

  const handleCollapsed = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <Layout className='layout-collapse-demo'>
      <Sider collapsed={collapsed} onCollapse={handleCollapsed} collapsible trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />} breakpoint='xl'>
        <div className='logo-area'>
          <img src='https://isluo.com/work/admin/assets/logo.f16d.png' style={{ width: '35px' }}/>
          <span>Admin</span>
        </div>
        <Menu
          defaultOpenKeys={['0']}
          defaultSelectedKeys={['0_1']}
        >
          <SubMenu
            key='0'
            title={
              <>
                <IconApps /> Navigation 1
              </>
            }
          >
            <MenuItem key='0_0'>Menu 1</MenuItem>
            <MenuItem key='0_1'>Menu 2</MenuItem>
            <MenuItem key='0_2' disabled>
              Menu 3
            </MenuItem>
          </SubMenu>
          <SubMenu
            key='1'
            title={
              <>
                <IconBug /> Navigation 2
              </>
            }
          >
            <MenuItem key='1_0'>Menu 1</MenuItem>
            <MenuItem key='1_1'>Menu 2</MenuItem>
            <MenuItem key='1_2'>Menu 3</MenuItem>
          </SubMenu>
          <SubMenu
            key='2'
            title={
              <>
                <IconBulb /> Navigation 3
              </>
            }
          >
            <MenuItemGroup key='2_0' title='Menu Group 1'>
              <MenuItem key='2_0_0'>Menu 1</MenuItem>
              <MenuItem key='2_0_1'>Menu 2</MenuItem>
            </MenuItemGroup>
            <MenuItemGroup key='2_1' title='Menu Group 1'>
              <MenuItem key='2_1_0'>Menu 3</MenuItem>
              <MenuItem key='2_1_1'>Menu 4</MenuItem>
            </MenuItemGroup>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 20 }}>
          Header
        </Header>
        <Layout style={{ padding: '24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0', textAlign: 'left' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content>
            <Routes>
              <Route
                path='demo'
                element={<Demo />}
              />
              <Route
                path='home'
                element={<Home />}
              />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;