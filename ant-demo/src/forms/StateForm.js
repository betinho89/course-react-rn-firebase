import { useEffect } from 'react';
import { Form, Input, Select } from 'antd';

export default function StateForm ({ state, form, saveState }) {
  useEffect(() => {
    form.resetFields();
    if (state) {
      form.setFieldsValue(state);
    }
  }, [state, form]);

  const onFinish = (values) => {
    saveState(values);
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 10 }}
      wrapperCol={{ span: 14 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Nombre"
        name="name"
        rules={[{
          required: true,
          message: 'El nombre es requerido!'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Código"
        name="code"
        rules={[{
          required: true,
          message: 'El código es requerido!'
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Estatus"
        name="status"
        initialValue={true}
      >
        <Select>
          <Select.Option value={true}>Activo</Select.Option>
          <Select.Option value={false}>Inactivo</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
};