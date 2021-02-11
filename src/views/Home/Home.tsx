import React from 'react';
import { TouchableOpacity } from 'react-native';
import { openEvent, Socket } from '../../utils/socket';
import { Container, ConnectionStatus, ConnectionStatusText, StatusBadge, StyledView, StyledText } from './styled';

interface Props {
  sockets: Socket;
}

const Home: React.FC<Props> = ({ sockets: { connectionStatus, badgeStatus } }) => (
  <Container>
    <ConnectionStatus>
      <ConnectionStatusText>{connectionStatus}</ConnectionStatusText>
      <StatusBadge status={badgeStatus} />
    </ConnectionStatus>
    <TouchableOpacity onPress={openEvent}>
      <StyledView>
        <StyledText>OPEN</StyledText>
      </StyledView>
    </TouchableOpacity>
  </Container>
);

export default Home;
