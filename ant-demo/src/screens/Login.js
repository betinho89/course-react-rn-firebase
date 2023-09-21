import { useState } from 'react';
import { Card, Form, Input, Button, message, Row, Col } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

import '../App.css';
import { useAuth } from '../utils/context';
import { loginWithEmailPass, loginWithGoogle } from '../services/firebase';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async (values) => {
    setLoading(true);
    const response = await loginWithEmailPass(values.username, values.password);
    if (response.code) {
      message.error(response.message);
      setLoading(false);
    } else {
      login(response);
      setLoading(false);
      navigate(from, { replace: true });
    }
  };

  const loginGoogle = async () => {
    setLoading(true);
    const response = await loginWithGoogle();
    if (response.code) {
      message.error(response.message);
      setLoading(false);
    } else {
      login(response);
      setLoading(false);
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="App">
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
            <Row justify="space-between">
              <Col span="auto">
                <Button htmlType='submit' type="primary" loading={loading}>Enviar</Button>
              </Col>
              <Col span="auto">
                <Button htmlType='button' onClick={loginGoogle} loading={loading}>Iniciar con Google</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
