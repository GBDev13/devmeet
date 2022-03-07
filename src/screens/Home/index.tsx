import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useLayoutEffect, useState } from 'react';
import { BackButton } from '../../components/BackButton';
import { EventCard, IEvent } from '../../components/EventCard';
import { api } from '../../services/api';
import { Container, EventsFlatList, Header, NoMoreText, Text, Title } from "./styles";
import { useToast } from "react-native-toast-notifications";
import SkeletonContent from 'react-native-skeleton-content';
import { useTheme } from 'styled-components/native';
import { lighten } from 'polished';

interface Params {
  typeId: number;
}

interface NavigationProps{
  navigate:(
    screen: string,
    event?:{
      event: IEvent
    }
  ) => void
}

export function Home() {
  const navigation = useNavigation<NavigationProps>();
  const toast = useToast();
  const { colors } = useTheme();

  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<IEvent[]>([]);

  const route = useRoute();
  const { typeId } = route.params as Params;

  async function getEvents() {
    try {
      setIsLoading(true);
      const { data } = await api.get(`/events?tipoId=${typeId}`);
      
      setEvents(data);
    } catch (err) {
      toast.show("Ocorreu um erro ao buscar a lista de eventos, tente novamente mais tarde!", {
        type: "danger",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    getEvents();
  }, []);

  return (
    <Container>
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
          type: 'timing',
          duration: 800,
        }}
      >
        <Title>
          Eventos{'\n'}disponíveis
        </Title>

        <BackButton />
      </Header>

      <Text
        from={{
          opacity: 0,
          translateY: 50
        }}
        animate={{
          opacity: 1,
          translateY: 0
        }}
        transition={{
          type: 'timing',
          duration: 1000,
        }}
      >
        Selecione o evento desejado.{'\n'}E espere sua data!
      </Text>
      
      {isLoading ? (
        <SkeletonContent
          containerStyle={{ flex: 1, width: '100%' }}
          isLoading={isLoading}
          layout={[
            { width: '100%', height: 190, borderRadius: 9, marginVertical: 16 },
            { width: '100%', height: 190, borderRadius: 9, marginVertical: 16 },
            { width: '100%', height: 190, borderRadius: 9, marginVertical: 16 },
            { width: '100%', height: 190, borderRadius: 9, marginVertical: 16 }
          ]}
          boneColor={lighten(0.2, colors.shape)}
          highlightColor={lighten(0.4, colors.shape)}
        />
      ) : (
        <EventsFlatList
          data={events}
          style={{ flex: 1, width: '100%' }}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <>
              <EventCard
                event={item}
                onPress={() => navigation.navigate("EventDetails", { event: item })}
              />
              {index === events.length - 1 && <NoMoreText>Sem mais eventos...</NoMoreText>}
            </>
            ) }
        />
      )}
    </Container>
  )
}