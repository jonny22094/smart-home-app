import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { Container, Input, Label, Button } from './styled';
import { setupSockets } from '../../utils/socket';

interface Props {
  navigation: any;
}

const Token: React.FC<Props> = ({ navigation }) => {
  const [token, setToken] = useState('');
  const [ip, setIp] = useState('');

  const saveData = async () => {
    await AsyncStorage.setItem('token', token);
    await AsyncStorage.setItem('ip', ip);
    await setupSockets();

    navigation.navigate('Home');
  };

  return (
    <Container>
      <Label>Server Ip: </Label>
      <Input onChangeText={setIp} value={ip} placeholder="Add Server url" />
      <Label>Token: </Label>
      <Input onChangeText={setToken} value={token} placeholder="Add token" />
      <Button onPress={saveData} title="Save" disabled={!token || !ip} />
    </Container>
  );
};

export default Token;
