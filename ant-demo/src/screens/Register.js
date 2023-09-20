import { Form, Input, Button, Row, Col, Card, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/firebase'

export default function Register() {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const response = await registerUser(values);
    if (response?.code) {
      message.error(response.message);
    } else {
      message.info('Se registro correctamente al usuario');
      navigate('/login');
    }
  };

  return (
    <div className="App">
      <Card title="Registro de usuario" style={{ maxWidth: 700 }}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onSubmit}
          initialValues={{
            email: '',
            full_name: '',
            password: ''
          }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{
              required: true,
              message: 'Email es requerido!'
            }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nombre completo"
            name="full_name"
            rules={[{
              required: true,
              message: 'Nombre completo es requerido!'
            }]}
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
          <Row>
            <Col>
              <Button htmlType='submit'>Registrar</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}