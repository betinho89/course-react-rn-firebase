import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu, Button, theme, Row, Col } from 'antd';
import { useAuth } from '../utils/context';

const { Header, Sider, Content } = Layout;

export default function Wrapper () {
  const { user, logout } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const { token: { colorBgContainer } } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline">
          <Menu.Item icon={<HomeOutlined />} key="home">
            <Link to={'/'}>Home</Link>
          </Menu.Item>
          {!user ? (
            <>
              <Menu.Item icon={<HomeOutlined />} key="register">
                <Link to={'/register'}>Registrarte</Link>
              </Menu.Item>
              <Menu.Item icon={<LoginOutlined />} key="login">
                <Link to={'/login'}>Iniciar sesión</Link>
              </Menu.Item>
            </>
          ) : (
            <>
              <Menu.Item icon={<UserOutlined />} key="users">
                <Link to={'/users'}>Usuarios</Link>
              </Menu.Item>
              <Menu.Item onClick={logout} icon={<LogoutOutlined />} key="logout">
                Cerrar sesión
              </Menu.Item>
            </>
          )}
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Row justify="space-between" align="middle">
            <Col span="auto">
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
            </Col>
            {user && (
              <Col span="auto">
                <span style={{ marginRight: 20 }}>Hola {user?.full_name || user?.displayName}</span>
              </Col>
            )}
          </Row>
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
