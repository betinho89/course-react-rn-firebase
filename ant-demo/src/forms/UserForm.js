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
        name="name"
        label="Nombre"
        rules={[{
          required: true,
          message: 'Nombre del estado requerido!'
        }]}
      >
        <Input type='text' />
      </Form.Item>
      <Form.Item
        name="code"
        label="Código"
        rules={[{
          required: true,
          message: 'Código del estado requerido!'
        }]}
      >
        <Input type='text' />
      </Form.Item>
      <Form.Item
        name="status"
        label="Estatus"
        initialValue={true}
      >
        <Select>
          <Select.Option value={true}>Activo</Select.Option>
          <Select.Option value={false}>Inactivo</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
}