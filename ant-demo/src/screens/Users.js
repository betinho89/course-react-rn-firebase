import { useEffect, useState } from "react";
import { Table, Row, Col, Modal, Button, Form } from "antd";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

import { useAuth } from "../utils/context";
import UserForm from "../forms/UserForm";

import { db } from "../firebase-config";

export default function Users() {
  const { user } = useAuth();
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

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
    getData();
  };

  const getData = async () => {
    setLoading(true);
    getDocs(collection(db, "states")).then((querySnapshot) => {
      const states = [];
      querySnapshot.forEach((doc) => {
        states.push({
          ...doc.data(),
          key: doc.id,
        });
      });
      setData(states);
      setLoading(false);
    });
  };

  useEffect(() => {
    getData();
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
              <Table columns={userColumns} dataSource={data} loading={loading} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
