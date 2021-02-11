import React from 'react';
import { colorEvent } from '../../../utils/socket';
import { Container, BoxContainer, Box } from './styled';

const colors = [
  { color: '#D8334A', value: '#FF0000' },
  { color: '#FC6E51', value: '' },
  { color: '#FFCE54', value: '' },
  { color: '#A0D468', value: '#00FF28' },
  { color: '#92C8A8', value: '#00FF00' },
  { color: '#A0CECB', value: '' },
  { color: '#4FC1E9', value: '' },
  { color: '#5D9CEC', value: '#0000FF' },
  { color: '#8067B7', value: '#FF00FF' },
  { color: '#AC92EC', value: '' },
  { color: '#EC87C0', value: '' },
  { color: '#F5F7FA', value: '#FFFFFF' },
  { color: '#656D78', value: '' },
  { color: '#000000', value: '' },
];

const ColorPalette: React.FC = () => (
  <Container>
    <BoxContainer>
      {colors.map(({ color, value }, idx) => (
        <Box key={idx} style={{ backgroundColor: color }} onPress={() => colorEvent(value || color)} />
      ))}
    </BoxContainer>
  </Container>
);

export default ColorPalette;
