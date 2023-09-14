import { Text } from 'react-native';

import FormItem from '../components/controls/FormItem';
import { Content, Header, Wrapper } from '../components/layout';

export default function Home() {
  return (
    <Wrapper>
      <Header title="Componentes Base" />
      <Content>
        <Text>Sin etiqueta</Text>
        <FormItem />
        <Text>Con etiqueta</Text>
        <FormItem label={"Correo electrónico"} />
      </Content>
    </Wrapper>
  );
};
