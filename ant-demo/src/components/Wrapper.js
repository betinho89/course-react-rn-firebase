import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';
import { useAuth } from '../utils/context';

const { Header, Sider, Content } = Layout;

export default function Wrapper () {
  const { logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline">
          <Menu.Item icon={<HomeOutlined />} key="home">
            <Link to={'/'}>Home</Link>
          </Menu.Item>
          <Menu.Item icon={<UserOutlined />} key="users">
            <Link to={'/users'}>Usuarios</Link>
          </Menu.Item>
          <Menu.Item>
            <Button onClick={logout}>Cerrar sesión</Button>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
