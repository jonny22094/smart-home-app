import styled from 'styled-components';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  background-color: #2b2f50;
  padding: 16px;
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

export const Box2 = styled(Box)`
  min-width: 50%;
  padding: 16px;
  margin: 8px;
`;

export const Box3 = styled.TouchableOpacity`
  width: 160px;
  background-color: red;
  align-items: center;
  justify-content: center;
`;

export const BoxText = styled.Text`
  font-size: 18px;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 1.5px;
`;

export const BoxContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ScrollContainer = styled.View`
  width: 100%;
  background-color: #191e40;
  flex: 1;
`;

export const StyledScroll = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    backgroundColor: '#191e40',
    borderRadius: 3,
  },
}))`
  background-color: #191e40;
  margin: 8px;
`;

export const StyledSlider = styled.Slider`
  flex: 1;
  width: 100%;
  margin: 8px 32px;
`;
