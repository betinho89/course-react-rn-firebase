import { Form, Input, Select } from 'antd';
import { useEffect, useState } from 'react';

export default function UserForm({ user }) {
  const [form] = Form.useForm();
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
      setEdit(true);
    } else {
      form.resetFields();
      setEdit(false);
    }
  }, [user, form]);

  return (
    <Form
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
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