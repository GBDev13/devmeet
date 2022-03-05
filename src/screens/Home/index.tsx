import React from 'react';
import { BackButton } from '../../components/BackButton';
import { EventCard } from '../../components/EventCard';
import { Container, Header, NoMoreText, Text, Title } from "./styles";

export function Home() {

  
  return (
    <Container>
      <Header>
        <Title>
          Eventos{'\n'}disponíveis
        </Title>

        <BackButton />
      </Header>

      <Text>Selecione o evento desejado.{'\n'}E espere sua data!</Text>

      <EventCard />
      <NoMoreText>Sem mais eventos...</NoMoreText>
      
    </Container>
  )
}