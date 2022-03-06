import React, { useState } from 'react';
import { EventTypeButton, IEventType } from '../../components/EventTypeButton';
import { Title } from '../Home/styles';
import { ButtonsContainer, Container, NextContainer, NextText, Text } from './styles';

import ProgrammingIcon from '../../assets/Programing-Terminal.svg';
import ProgrammingIconWhite from '../../assets/Programing-Terminal-White.svg';

import LaptopIcon from '../../assets/laptop-programming-code.svg';
import LaptopIconWhite from '../../assets/laptop-programming-code-White.svg';

import GitIcon from '../../assets/hierarchy.svg';
import GitIconWhite from '../../assets/hierarchy-White.svg';

import IphoneIcon from '../../assets/iPhone-X-Orange.svg';
import IphoneIconWhite from '../../assets/iPhone-X-White.svg';
import { Button } from '../../components/Button';
import Arrow from '../../assets/arrow.svg';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const eventTypes: IEventType[] = [
  {
    id: 1,
    icons: [<ProgrammingIcon />, <ProgrammingIconWhite />],
    title: "Servidores Linux",
    count: 5
  },
  {
    id: 2,
    icons: [<LaptopIcon />, <LaptopIconWhite />],
    title: "Desenvolvimento Front-end",
    count: 2
  },
  {
    id: 3,
    icons: [<GitIcon />, <GitIconWhite />],
    title: "Git e DevOps",
    count: 4
  },
  {
    id: 4,
    icons: [<IphoneIcon />, <IphoneIconWhite />],
    title: "Construindo Interfaces",
    count: 2
  }
];

export function EventTypes() {
  const { colors } = useTheme();
  const navigation = useNavigation<any>();
  const [selectedType, setSelectedType] = useState<IEventType | null>(null);

  function handleSelectType(type: IEventType) {
    if (selectedType?.id === type.id) {
      setSelectedType(null);
      return;
    }
    setSelectedType(type);
  }

  return (
    <Container>
      <Title>
        Que tipo de evento você procura?
      </Title>
      <Text>Selecione a categoria que mais te agrada!</Text>
      
      <ButtonsContainer>
        {eventTypes.map(type => (
          <EventTypeButton
            key={type.id}
            onPress={() => handleSelectType(type)}
            eventType={type}
            selectedType={selectedType}
          />
        ))}
      </ButtonsContainer>

      {selectedType !== null && (
        <NextContainer>
            <NextText>Próximo</NextText>
            <Button
              onPress={() => navigation.navigate("Home")}
              bgColor={colors.success}
              size="40px"
              radius="11px"
            >
              <Arrow width={20} />
            </Button>
        </NextContainer>
      )}
    </Container>
  )
}