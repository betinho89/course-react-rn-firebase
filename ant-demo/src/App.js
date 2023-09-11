import { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';

import './App.css';
import { useAuth } from './utils/context'

function App() {
  const { authenticated, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    await new Promise(
      resolve => setTimeout(resolve, 5000)
    );
    login();
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="App">
      {!authenticated ? (
        <Card style={{ maxWidth: 600 }}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onSubmit}
          >
            <Form.Item
              label="Usuario"
              rules={[
                { required: true },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              rules={[{ required: true }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button htmlType='submit' type="primary" loading={loading}>Enviar</Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <Card style={{ maxWidth: 600 }}>
          <p>El usuario ha iniciado sesión</p>
          <Button
            onClick={handleLogout}
            type='primary'
          >Cerrar sesión</Button>
        </Card>
      )}
    </div>
  );
}

export default App;
