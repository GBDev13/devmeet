import React from 'react';
import { ButtonText, Container } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components/native';

export function BackButton() {
  const { colors } = useTheme();

  return (
    <Container>
      <AntDesign name="arrowleft" size={20} color={colors.textLight} />
      <ButtonText>
        Voltar
      </ButtonText>
    </Container>
  )
}