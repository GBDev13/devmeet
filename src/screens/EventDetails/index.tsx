import React from 'react';
import { View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { EventCountdown } from '../../components/EventCountdown';
import { EventLink } from '../../components/EventLink';
import { useTicker } from '../../hooks/useTicker';
import { Container, DateText, EventTitle, Header, Organizer, OrganizerContainer, Text, Title } from "./styles";

export function EventDetails() {
  const finalDate = new Date("2022-03-08T00:50:40.037Z");
  const startDate = new Date("2022-03-02T00:00:00.000Z");

  const timerData = useTicker({ startDate, finalDate });

  return (
    <Container
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 32,
        paddingVertical: 62,
      }}
    >
      <Header>
        <View>
          <DateText isBold>
            02/MAR
          </DateText>
          <DateText>
            19:00
          </DateText>
          
        </View>
        <BackButton />
      </Header>

      <Title>
        Criando interfaces muito malucas com o Figma!
      </Title>
      <Text>Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.</Text>

      <OrganizerContainer>
        <Organizer>Organizado por:  </Organizer>
        <Organizer isBold>Comunidade Ballerini</Organizer>
      </OrganizerContainer>

      <EventTitle>Link do Evento</EventTitle>

      <EventLink isTimeUp={timerData.isTimeUp} />

      <EventCountdown timerData={timerData} />
    </Container>
  )
}