import { Form, Input, Select } from 'antd';
import { useEffect } from 'react';

export default function UserForm({ user, form, saveUser }) {
  useEffect(() => {
    form.resetFields();
    if (user) {
      form.setFieldsValue(user);
    }
  }, [user, form]);

  const onFinish = (values) => {
    saveUser(values);
  }

  return (
    <Form
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        label="Nombre de usuario"
        rules={[{
          required: true,
          message: 'Nombre de usuario requerido!'
        }]}
      >
        <Input type='text' />
      </Form.Item>
      <Form.Item
        name="full_name"
        label="Nombre completo"
        rules={[{
          required: true,
          message: 'Nombre completo requerido!'
        }]}
      >
        <Input type='text' />
      </Form.Item>
      <Form.Item
        name="email"
        label="Correo electrónico"
        rules={[{
          type: 'email',
          message: 'Formato de correo invalido'
        }, {
          required: true,
          message: 'Correo requerido!'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Contraseña"
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="rpassword"
        label="Repetir contraseña"
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="status"
        label="Estatus"
        initialValue={1}
      >
        <Select>
          <Select.Option value={1}>Activo</Select.Option>
          <Select.Option value={0}>Inactivo</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
}