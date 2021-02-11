import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2b2f50;
`;

export const Box = styled.TouchableOpacity`
  flex: 1;
  height: 65px;
  align-items: center;
  justify-content: center;
  background-color: #191e40;
  margin: 8px;
  min-width: 25%;
  border-radius: 3px;
`;

export const BoxText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1.5px;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 8px;
`;

export const SliderBox = styled.View`
  flex: 1;
  height: 65px;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
  min-width: 50%;
  flex-direction: row;
`;

export const StyledSlider = styled.Slider`
  flex: 1;
  margin: 0 16px;
`;
