import { Layout } from 'antd';
import { Route, Router } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './utils/context';
import Login from './screens/Login';

const { Content } = Layout;

function App() {
  return (
    <AuthProvider>
      <Layout style={{ minHeight: '100vh' }}>
        <Content style={{ padding: '50px' }}>
        </Content>
      </Layout>
    </AuthProvider>
  );
}

export default App;
