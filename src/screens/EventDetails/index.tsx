import { useRoute } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { BackButton } from '../../components/BackButton';
import { IEvent } from '../../components/EventCard';
import { EventCountdown } from '../../components/EventCountdown';
import { EventLink } from '../../components/EventLink';
import { useTicker } from '../../hooks/useTicker';
import { formatDate } from '../../utils/formatDate';
import { Container, DateText, EventTitle, Header, Organizer, OrganizerContainer, Text, Title } from "./styles";

interface Params {
  event: IEvent;
}

export function EventDetails() {
  const finalDate = new Date("2022-03-08T00:50:40.037Z");
  const startDate = new Date("2022-03-02T00:00:00.000Z");

  const timerData = useTicker({ startDate, finalDate });

  const route = useRoute();
  const { event } = route.params as Params;

  const formattedDate = formatDate(new Date(event.dataPublicacao), 'dd/MMM');
  const formattedHour = formatDate(new Date(event.dataPublicacao), 'HH:mm');

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
            {formattedDate}
          </DateText>
          <DateText>
            {formattedHour}
          </DateText>
          
        </View>
        <BackButton />
      </Header>

      <Title>
        {event.titulo}
      </Title>
      <Text>{event.descricao}</Text>

      <OrganizerContainer>
        <Organizer>Organizado por:  </Organizer>
        <Organizer isBold>{event.organizador}</Organizer>
      </OrganizerContainer>

      <EventTitle>Link do Evento</EventTitle>

      <EventLink link={event.link} isTimeUp={timerData.isTimeUp} />

      <EventCountdown timerData={timerData} />
    </Container>
  )
}