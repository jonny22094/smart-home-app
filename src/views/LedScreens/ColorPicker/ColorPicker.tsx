import React, { useState, useEffect } from 'react';
import { TriangleColorPicker, fromHsv, toHsv } from 'react-native-color-picker';
import { Feather } from '@expo/vector-icons';
import { colorEvent, loadColorEvent } from '../../../utils/socket';
import { Container, BoxContainer, Box, BoxText, StyledSlider, SliderBox } from './styled';

type HsvColor = { h: number; s: number; v: number };

const ColorPicker: React.FC = () => {
  const [color, setColor] = useState({
    h: 0,
    s: 0,
    v: 0,
  });

  const handleColorChange = (newColor: HsvColor) => {
    colorEvent(fromHsv(newColor));
    setColor(newColor);
  };

  useEffect(() => {
    loadColorEvent(_ => {
      const hex = Number(_).toString(16);
      setColor(toHsv(hex));
    });
  }, []);

  return (
    <Container>
      <TriangleColorPicker
        defaultColor={color}
        color={color}
        onColorSelected={null}
        onColorChange={handleColorChange}
        style={{ flex: 3 }}
      />
      <BoxContainer>
        <Box onPress={() => handleColorChange(toHsv('#000000'))}>
          <BoxText>Off</BoxText>
        </Box>
        <Box onPress={() => handleColorChange(toHsv('#ffffff'))}>
          <BoxText>On</BoxText>
        </Box>
        <SliderBox>
          <Feather name="moon" size={24} color="rgba(255, 255, 255, 0.6);" />
          <StyledSlider
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#1EB1FC"
            maximumTractTintColor="#1EB1FC"
            step={0.01}
            onValueChange={value =>
              handleColorChange({
                ...color,
                v: value,
              })
            }
            value={color.v}
            thumbTintColor="#1EB1FC"
          />
          <Feather name="sun" size={24} color="rgba(255, 255, 255, 0.6);" />
        </SliderBox>
      </BoxContainer>
    </Container>
  );
};

export default ColorPicker;
