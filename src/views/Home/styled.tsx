import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledView = styled.View`
  width: 200px;
  height: 200px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 45px;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: rgba(0, 0, 0, 0.3);
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 25px;
`;

export const ConnectionStatus = styled.View`
  position: absolute;
  top: 45px;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ConnectionStatusText = styled(StyledText)`
  text-align: center;
  text-transform: uppercase;
`;

export const StatusBadge = styled.View<{ connected: boolean }>`
  margin: 0 6px;
  width: 7px;
  height: 7px;
  border-radius: 45px;

  background: ${({ connected }) => (connected ? '#6bd692' : '#f16e6e')};
`;
