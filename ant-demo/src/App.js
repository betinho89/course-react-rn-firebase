import { Card, Form, Input, Button } from 'antd';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card style={{ maxWidth: 600 }}>
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
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
            <Button type="primary">Enviar</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default App;
