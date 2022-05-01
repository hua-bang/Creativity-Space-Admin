import React, { useState } from 'react';
import { Layout, Menu } from '@arco-design/web-react';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import routes, { RouteConfig } from '@/routes';
import { Navigate, useNavigate } from 'react-router-dom';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Sider = Layout.Sider;

const generateMenu = (route: RouteConfig, index: string) => {
  const { hidden, title, children } = route;

  if (hidden) {
    return null;
  }

  return (
    <SubMenu key={index}  title={title}>
      {
        children?.map((child, childIndex) => (
          <MenuItem key={`${index}_${childIndex}`}>
            {child.title}
          </MenuItem>
        ))
      }
    </SubMenu>
  );
}

const MenuNav: React.FC = () => {

  const [collapsed, setCollapsed] = useState(true);
  const navigate = useNavigate();

  const handleCollapsed = () => {
    setCollapsed(prev => !prev);
  };

  const handleClick = (key: string) => {
    const [index, childrenIndex] = key.split('_');
    const parentRoute = routes[index as any]; 
    const childrenRoute = parentRoute.children ? parentRoute.children[childrenIndex as any] : null;
    const path = childrenRoute ? parentRoute.path?.replace('/*', '') + '/' + childrenRoute.path! : parentRoute.path;
    navigate(path ?? '/dashBoard/workplace');
  }

  return (
    <Sider collapsed={collapsed} onCollapse={handleCollapsed} collapsible trigger={collapsed ? <IconCaretRight /> : <IconCaretLeft />} breakpoint='xl'>
      <div className='logo-area'>
        <span>Admin</span>
      </div>
      <Menu
        defaultOpenKeys={['0']}
        defaultSelectedKeys={['0_0']}
        onClickMenuItem={handleClick}
      >
        {
          routes.map((route, index) => (
            generateMenu(route, `${index}`)
          ))
        }
      </Menu>
      </Sider>
  );
};

export default MenuNav;