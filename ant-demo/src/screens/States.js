import { useEffect, useState } from "react";
import { Table, Row, Col, Modal, Button, Form, message } from 'antd';
import { collection, doc, setDoc, deleteDoc, onSnapshot, query, orderBy } from "firebase/firestore";

import StateForm from "../forms/StateForm";
import { db } from '../firebase-config';

export default function States() {
  const [form] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const statesColumns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Código',
      dataIndex: 'code',
      key: 'code',
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
      render: (text, record) => (<>
          <Button onClick={() => handleSelectedRow(record)}>Editar</Button>
          <Button onClick={() => deleteRow(record.key)}>Eliminar</Button>
        </>)
    }
  ];

  const handleSelectedRow = (record) => {
    setSelectedState(record);
    toggleModal();
  };

  const handleRegisterState = () => {
    setSelectedState(null);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const deleteRow = async (key) => {
    try {
        // Creamos primero la referencia al documento que vamos a editar
        const stateRef = doc(db, "states", key);
        // Eliminamos nuestro documento
        await deleteDoc(stateRef);
    } catch (error) {
      message.error(error.message);
    }
  };

  const saveState = async (values) => {
    try {
      if (!selectedState) {
        // Con la siguiente instrucción creamos un nuevo documento en la colección a la que hagamos referencia
        await setDoc(doc(collection(db, "states")), values)
      } else {
        // Creamos primero la referencia al documento que vamos a editar
        const stateRef = doc(db, "states", selectedState.key);
        // Editamos nuestro documento
        await setDoc(stateRef, values, {
          merge: true,
        });
      }
      toggleModal();
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    // En la siguiente sección de código creamos una suscripción a una colección para escuchar en tiempo real los cambios que sufra
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
      },
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
        onOk={() => { form.submit(); }}
      >
        <StateForm state={selectedState} form={form} saveState={saveState} />
      </Modal>
      <Row>
        <Col span={24}>
          <Row justify="space-between" align="middle">
            <Col>
              <h1>Lista de estados</h1>
            </Col>
            <Col>
              <Button onClick={handleRegisterState}>Añadir nuevo</Button>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Table columns={statesColumns} dataSource={data} />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}
