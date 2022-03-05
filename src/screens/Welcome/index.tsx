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

export function Welcome() {
  const { colors } = useTheme();

  return (
    <Container>
      <TextContainer>
        <Title>Olá, Dev <Title style={{ color: colors.primary }}>!</Title></Title>
        <Text>Encontre o seu <TextHighlight>próximo</TextHighlight> evento de programação!</Text>
      </TextContainer>
      <Person />
      <Button />
    </Container>
  )
}