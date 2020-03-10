import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Input, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <Form>
        <Input
          placeholder="Adicionar Usuários"
          autoCorrect={false}
          autoCapitalize="none"
        />
        <SubmitButton>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Usuários',
};
