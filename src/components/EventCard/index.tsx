import React from 'react';
import { useTheme } from 'styled-components/native';
import { CardFooter, Container, DateText, FooterText, ShortDescription, Title } from './styles';
import ArrowIcon from '../../assets/Arrow-Orange.svg';

export function EventCard() {
  const { colors } = useTheme();

  return (
    <Container>
      <DateText><DateText>02/MAR</DateText> <DateText color={colors.background}>-</DateText> <DateText fontWeight="light">19:00</DateText></DateText>
      <Title>Criando interfaces muito malucas com o Figma!</Title>
      <ShortDescription numberOfLines={3}>
      Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.  
      </ShortDescription>
      <CardFooter>
        <FooterText>Organizado por: <FooterText isBold>Comunidade Ballerini</FooterText></FooterText>
        <ArrowIcon />
      </CardFooter>
    </Container>
  )
}