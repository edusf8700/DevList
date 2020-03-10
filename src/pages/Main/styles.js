import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  background: #eee;
  padding: 0 15px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
  background: #7159c1;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 0 12px;
  margin-left: 10px;
`;
