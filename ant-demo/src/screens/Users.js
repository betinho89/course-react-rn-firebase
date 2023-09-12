import { useEffect, useState } from "react";
import { Table, Row, Col, Modal, Button, Form } from 'antd';

import { useAuth } from "../utils/context";
import { API_URL } from '../constants';
import UserForm from '../forms/UserForm';

export default function Users() {
  const { token } = useAuth();
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const userColumns = [
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username'
    },
    {
      title: 'Nombre completo',
      dataIndex: 'full_name',
      key: 'full_name'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Estatus',
      dataIndex: 'status',
      key: 'status',
      render: status => status ? 'Activo' : 'Inactivo'
    },
    {
      title: 'Editar',
      key: 'actions',
      render: (text, record) =>
        <Button onClick={() => handleSelectedRow(record)}>Editar</Button>
    }
  ];

  const handleSelectedRow = (record) => {
    setSelectedUser(record);
    toggleModal();
  };

  const handleRegisterUser = () => {
    setSelectedUser(null);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const saveUser = (values) => {
    if (!selectedUser) {
      fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
          rol_id: '642bbd8ce754c42aeaee39d3',
        }),
      });
    } else {
      fetch(`${API_URL}/users/${selectedUser._id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...values,
        }),
      });
    }
  };

  useEffect(() => {
    fetch(`${API_URL}/users`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(response => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      <Modal
        centered
        cancelText="Cancelar"
        open={showModal}
        onCancel={toggleModal}
        onOk={() => { form.submit(); }}
      >
        <UserForm user={selectedUser} form={form} saveUser={saveUser} />
      </Modal>
      <Row>
        <Col span={24}>
          <Row>
            <Col>
              <h1>Lista de usuarios</h1>
            </Col>
            <Col>
              <Button onClick={handleRegisterUser}>Añadir nuevo</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table columns={userColumns} dataSource={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
