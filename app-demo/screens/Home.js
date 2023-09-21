import { useState, useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

import { Content, Header, Wrapper } from '../components/layout';
import State from '../components/controls/State';
import Base from '../components/modals/Base';
import FormItem from '../components/controls/FormItem';
import Button from '../components/controls/Button';

import { auth, db } from '../firebase-config';
import { logoutAuth } from '../services/firebase';

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState();
  const [data, setData] = useState([]);

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
  }, [])

  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, response => {
      if (!response) {
        navigation.navigate('Login');
      }
    });
    return subscriber;
  }, [auth]);

  const logout = async () => {
    await logoutAuth();
  };

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <Wrapper>
      <Header title="Dashboard" />
      <Content>
        {visible && (
          <Base
            id="modal-state"
            visible={visible}
            title={"Editar estado"}
            onClose={toggleModal}
          >
            <FormItem label="Nombre" />
            <FormItem label="Código" />
            <FormItem label="Estatus" />
          </Base>
        )}
        <Button label="Cerrar sesión" onPress={logout} />
        <Button label="Abrir modal" onPress={toggleModal} />
        <ScrollView horizontal={true}>
          <FlatList
            data={data}
            renderItem={State}
            keyExtractor={item => item.key}
          />
        </ScrollView>
      </Content>
    </Wrapper>
  );
};
