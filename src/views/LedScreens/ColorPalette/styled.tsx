import styled from 'styled-components';

export const Container = styled.View`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #2b2f50;
  padding: 32px;
`;

export const Box = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

export const BoxContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
