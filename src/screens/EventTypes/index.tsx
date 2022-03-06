import React, { useLayoutEffect, useState } from 'react';
import { EventTypeButton, IEventType } from '../../components/EventTypeButton';
import { Title } from '../Home/styles';
import { ButtonsContainer, Container, NextContainer, NextText, Text } from './styles';
import { Button } from '../../components/Button';
import Arrow from '../../assets/arrow.svg';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../services/api';
import { useToast } from "react-native-toast-notifications";
import SkeletonContent from 'react-native-skeleton-content';
import { lighten } from 'polished';

interface NavigationProps{
  navigate:(
    screen: string,
    event?:{
      typeId: number
    }
  ) => void
}

export function EventTypes() {
  const { colors } = useTheme();
  const toast = useToast();
  const navigation = useNavigation<NavigationProps>();
  const [selectedType, setSelectedType] = useState<IEventType | null>(null);

  function handleSelectType(type: IEventType) {
    if (selectedType?.id === type.id) {
      setSelectedType(null);
      return;
    }
    setSelectedType(type);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState<IEventType[]>([]);

  async function getEventTypes() {
    try {
      setIsLoading(true);
      const { data } = await api.get("/tipo");
      
      setTypes(data);
    } catch (err) {
      toast.show("Ocorreu um erro ao buscar os tipos de eventos, tente novamente mais tarde!", {
        type: "danger",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    getEventTypes();
  }, []);

  return (
    <Container>
      <Title>
        Que tipo de evento você procura?
      </Title>
      <Text>Selecione a categoria que mais te agrada!</Text>

      {isLoading ? (
        <SkeletonContent
          containerStyle={{
            flex: 1,
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
          isLoading={isLoading}
          layout={[
            { width: '48%', height: 160, borderRadius: 9, marginVertical: 8 },
            { width: '48%', height: 160, borderRadius: 9, marginVertical: 8 },
            { width: '48%', height: 160, borderRadius: 9, marginVertical: 8 },
            { width: '48%', height: 160, borderRadius: 9, marginVertical: 8 },
            { width: '48%', height: 160, borderRadius: 9, marginVertical: 8 },
            { width: '48%', height: 160, borderRadius: 9, marginVertical: 8 }
          ]}
          boneColor={lighten(0.2, colors.shape)}
          highlightColor={lighten(0.4, colors.shape)}
        />
      ) : (
        <ButtonsContainer>
          {!isLoading && types.map(type => (
            <EventTypeButton
              key={type.id}
              onPress={() => handleSelectType(type)}
              eventType={type}
              selectedType={selectedType}
            />
          ))}
        </ButtonsContainer>
      )}

      <NextContainer>
          {selectedType !== null && (
            <>
              <NextText>Próximo</NextText>
              <Button
                onPress={() => navigation.navigate("Home", { typeId: selectedType?.id })}
                bgColor={colors.success}
                size="40px"
                radius="11px"
              >
                <Arrow width={20} />
              </Button>
            </>
          )}
      </NextContainer>
    </Container>
  )
}