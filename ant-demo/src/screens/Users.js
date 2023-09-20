import { useEffect, useState } from "react";
import { Table, Row, Col, Modal, Button, Form } from "antd";
import { collection, doc, setDoc, onSnapshot, query, orderBy } from "firebase/firestore";

import UserForm from "../forms/UserForm";

import { db } from "../firebase-config";

export default function Users() {
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const userColumns = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Nombre",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Código",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Estatus",
      dataIndex: "status",
      key: "status",
      render: (status) => (status ? "Activo" : "Inactivo"),
    },
    {
      title: "Editar",
      key: "actions",
      render: (text, record) => (
        <Button onClick={() => handleSelectedRow(record)}>Editar</Button>
      ),
    },
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

  const saveUser = async (values) => {
    if (!selectedUser) {
      await setDoc(doc(collection(db, "states")), values);
    } else {
      await setDoc(doc(db, "states", selectedUser.key), values, {
        merge: true,
      });
    }
    toggleModal();
  };

  useEffect(() => {
    const subscriber = onSnapshot(
      query(collection(db, "states"), orderBy("name")),
      querySnapshot => {
        const states = [];
        querySnapshot.forEach(doc => {
          states.push({
            ...doc.data(),
            key: doc.id,
          });
        });
        setData(states);
      }
    );

    return subscriber;
  }, []);

  return (
    <>
      <Modal
        centered
        cancelText="Cancelar"
        open={showModal}
        onCancel={toggleModal}
        onOk={() => {
          form.submit();
        }}
      >
        <UserForm user={selectedUser} form={form} saveUser={saveUser} />
      </Modal>
      <Row>
        <Col span={24}>
          <Row align="middle" justify="space-between">
            <Col>
              <h1>Lista de estados</h1>
            </Col>
            <Col>
              <Button onClick={handleRegisterUser}>Añadir nuevo</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table
                columns={userColumns}
                dataSource={data}
                pagination={pagination}
                onChange={pagination => setPagination(pagination)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
