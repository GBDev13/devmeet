import { useRoute } from '@react-navigation/native';
import { MotiView } from 'moti';
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

  const route = useRoute();
  const { event } = route.params as Params;
  // const finalDate = new Date('2022-03-11T02:24:00.391Z'); // quando o evento começa
  // const startDate = new Date("2022-03-02T23:00:00.000Z"); // data de publicaçao

  const timerData = useTicker({
    startDate: new Date(event.dataPublicacao),
    finalDate: new Date(event.dataInicio),
    endDate: new Date(event.dataFinalizacao)
    // startDate,
    // finalDate
  });

  const formattedDate = formatDate(new Date(event.dataInicio), 'dd/MMM');
  const formattedHour = formatDate(new Date(event.dataInicio), 'HH:mm');

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
      <Header
        from={{
          opacity: 0,
          translateY: -80
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          type: 'spring',
        }}
      >
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

      <Title
        from={{
          opacity: 0,
          translateX: -80
        }}
        animate={{
          opacity: 1,
          translateX: 0
        }}
        transition={{
          type: 'spring',
        }}
      >
        {event.titulo}
      </Title>
      <Text
        from={{
          opacity: 0,
          translateY: 100
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          type: 'spring',
        }}
      >
        {event.descricao}
      </Text>

      <OrganizerContainer
        from={{
          opacity: 0,
          translateX: -80
        }}
        animate={{
          opacity: 1,
          translateX: 0
        }}
        transition={{
          type: 'spring',
        }}
      >
        <Organizer>Organizado por:  </Organizer>
        <Organizer isBold>{event.organizador}</Organizer>
      </OrganizerContainer>

      <MotiView
        style={{ width: '100%' }}
        from={{
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          type: 'spring',
        }}
      >
        <EventTitle>Link do Evento</EventTitle>

        <EventLink event={event} isTimeUp={timerData.isTimeUp} isEnded={timerData.isEnded} />
      </MotiView>

      <EventCountdown timerData={timerData} />
    </Container>
  )
}