import React from 'react';
import { TouchableOpacity } from 'react-native';
import { openEvent, useSocketStatus } from '../../utils/socket';
import { Container, ConnectionStatus, ConnectionStatusText, StatusBadge, StyledView, StyledText } from './styled';

const Home: React.FC = () => {
  const { isConnected } = useSocketStatus();

  return (
    <Container>
      <ConnectionStatus>
        <ConnectionStatusText>{isConnected ? 'connected' : 'disconnected'}</ConnectionStatusText>
        <StatusBadge connected={isConnected} />
      </ConnectionStatus>
      <TouchableOpacity onPress={openEvent}>
        <StyledView>
          <StyledText>OPEN</StyledText>
        </StyledView>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
