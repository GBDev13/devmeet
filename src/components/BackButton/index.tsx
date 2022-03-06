import React from 'react';
import { ButtonText, Container } from "./styles";
import { AntDesign } from '@expo/vector-icons'; 
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

export function BackButton() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <Container onPress={() => navigation.goBack()}>
      <AntDesign name="arrowleft" size={20} color={colors.textLight} />
      <ButtonText>
        Voltar
      </ButtonText>
    </Container>
  )
}