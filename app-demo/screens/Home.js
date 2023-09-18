import { useState } from 'react';
import { FlatList, ScrollView } from 'react-native';

import { Content, Header, Wrapper } from '../components/layout';
import State from '../components/controls/State';
import Base from '../components/modals/Base';
import FormItem from '../components/controls/FormItem';
import Button from '../components/controls/Button';

export default function Home({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState();
  const data = [
    { id: 1, name: 'Querétaro', code: 'QRO', status: true },
    { id: 2, name: 'Guerrero', code: 'GUE', status: true },
    { id: 3, name: 'Guanajuato', code: 'GUA', status: false },
  ];

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
        <Button label="Abrir modal" onPress={toggleModal} />
        <ScrollView horizontal={true}>
          <FlatList
            data={data}
            renderItem={State}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </Content>
    </Wrapper>
  );
};
