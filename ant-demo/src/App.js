import { Layout } from 'antd';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './utils/context';
import Login from './screens/Login';
import Users from './screens/Users';

const { Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ padding: '50px' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </Content>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
