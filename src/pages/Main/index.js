import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Keyboard } from 'react-native';

import api from '../../services/api';
import { Container, Input, Form, SubmitButton } from './styles';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newUser: '',
    users: [],
  };

  handleAddUser = async () => {
    const { newUser, users } = this.state;

    const response = await api.get(`/users/${newUser}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    this.setState({
      users: [...users, data],
      newUser: '',
    });

    Keyboard.dismiss();
  };

  render() {
    const { newUser } = this.state;

    return (
      <Container>
        <Form>
          <Input
            placeholder="Adicionar Usuários"
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={text => this.setState({ newUser: text })}
            value={newUser}
            returnKeyType="send"
            onSubmitEditing={this.handleAddUser}
          />
          <SubmitButton onPress={this.handleAddUser}>
            <Icon name="md-add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuários',
};
