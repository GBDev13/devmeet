import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BackButton } from '../../components/BackButton';
import { EventCard, IEvent } from '../../components/EventCard';
import { Container, Header, NoMoreText, Text, Title } from "./styles";

interface NavigationProps{
  navigate:(
    screen: string,
    event?:{
      car: IEvent
    }
  ) => void
}

export function Home() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <Container>
      <Header>
        <Title>
          Eventos{'\n'}disponíveis
        </Title>

        <BackButton />
      </Header>

      <Text>Selecione o evento desejado.{'\n'}E espere sua data!</Text>

      <EventCard
        onPress={() => navigation.navigate("EventDetails")}
      />
      <NoMoreText>Sem mais eventos...</NoMoreText>
      
    </Container>
  )
}