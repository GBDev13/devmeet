import React from 'react';
import { useTheme } from 'styled-components/native';
import Person from '../../assets/person.svg';
import { Button } from '../../components/Button';
import {
  Container,
  TextContainer,
  Title,
  Text,
  TextHighlight
} from "./styles";
import Arrow from '../../assets/arrow.svg';

export function Welcome() {
  const { colors } = useTheme();

  return (
    <Container>
      <TextContainer>
        <Title>Olá, Dev <Title style={{ color: colors.primary }}>!</Title></Title>
        <Text>Encontre o seu <TextHighlight>próximo</TextHighlight> evento de programação!</Text>
      </TextContainer>
      <Person />
      <Button bgColor={colors.primary}>
        <Arrow />
      </Button>
    </Container>
  )
}