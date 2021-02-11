import React, { useState } from 'react';
import { ColorPicker, fromHsv } from 'react-native-color-picker';
import { View } from 'react-native';
import { colorEvent } from '../../../utils/socket';
import { Container, BoxContainer, StyledScroll, Box, Box2, Box3, BoxText, StyledSlider } from './styled';

type HsvColor = { h: number; s: number; v: number };
type Sequence = { time: number; color: string }[];

const ColorSequence: React.FC = () => {
  const [sequence, setSequence] = useState<Sequence>([]);
  const [time, setTime] = useState(10);
  const [color, setColor] = useState({
    h: 0,
    s: 0,
    v: 0,
  });

  const handleColorChange = (newColor: HsvColor) => {
    setColor(newColor);
  };

  const handleAddColor = () => {
    const sequenceStep = {
      time,
      color: fromHsv(color),
    };

    setSequence(prev => [...prev, sequenceStep]);
  };

  const handleRemoveColor = (id: number) => {
    setSequence(prev => prev.filter((_, idx) => idx !== id));
  };

  const handleSendSequence = () => {
    colorEvent(sequence);
  };

  return (
    <Container>
      <ColorPicker
        style={{ flex: 3, width: '100%' }}
        defaultColor={color}
        color={color}
        onColorSelected={null}
        sliderComponent={null}
        onColorChange={handleColorChange}
      />
      <BoxContainer>
        <Box onPress={handleAddColor}>
          <BoxText>Add</BoxText>
        </Box>
        <Box onPress={handleSendSequence}>
          <BoxText>Start</BoxText>
        </Box>
        <Box2 as={View}>
          <BoxText>{time}ms</BoxText>
          <StyledSlider
            minimumValue={20}
            maximumValue={5000}
            minimumTrackTintColor="#1EB1FC"
            maximumTractTintColor="#1EB1FC"
            step={1}
            onValueChange={setTime}
            thumbTintColor="#1EB1FC"
          />
        </Box2>
      </BoxContainer>
      <StyledScroll horizontal>
        {sequence.map(({ color: value, time: sequenceTime }, idx) => (
          <Box3 key={idx} style={{ backgroundColor: value }} onPress={() => handleRemoveColor(idx)}>
            <BoxText>{sequenceTime}</BoxText>
          </Box3>
        ))}
      </StyledScroll>
    </Container>
  );
};

export default ColorSequence;
