import { useState } from 'react';
import { Card, Form, Input, Button } from 'antd';
import { Redirect } from 'react-router-dom';

import '../App.css';
import { useAuth } from '../utils/context'
import { API_URL } from '../constants';

function Login() {
  const { token, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (values) => {
    setLoading(true);
    const response = await fetch(`${API_URL}/authentication`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        strategy: 'local',
        email: values.username,
        password: values.password,
      }),
    }).then(response => response.json());
    login(response);
    setLoading(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="App">
      {!token ? (
        <Card style={{ maxWidth: 600 }}>
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onSubmit}
            initialValues={{
              username: '',
              password: ''
            }}
          >
            <Form.Item
              label="Usuario"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Nombre de usuario requerido!'
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Contraseña"
              name="password"
              rules={[{
                required: true,
                message: 'Contraseña requerida!'
              }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }}>
              <Button htmlType='submit' type="primary" loading={loading}>Enviar</Button>
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <h1>Logueado</h1>
      )}
    </div>
  );
}

export default Login;
