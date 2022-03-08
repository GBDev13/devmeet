import React, { useEffect } from 'react';
import { useTheme } from 'styled-components/native';
import Person from '../../assets/person.svg';
import { Button } from '../../components/Button';
import {
  Container,
  TextContainer,
  Title,
  Text,
  TextHighlight
} from "./styles";
import Arrow from '../../assets/arrow.svg';
import { MotiView } from 'moti';

interface Props {
  navigation: any;
}

export function Welcome({ navigation }: Props) {
  const { colors } = useTheme();

  function handleNext() {
    navigation.navigate("EventTypes");
  }

  useEffect(() => {
    navigation.addListener('beforeRemove', (e: any) => {
      e.preventDefault();
      return;
    })
  },[navigation]);

  return (
    <Container>
      <TextContainer>
        <MotiView
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
          <Title>Olá, Dev <Title style={{ color: colors.primary }}>!</Title></Title>
        </MotiView>
        <MotiView
          from={{
            opacity: 0,
            translateX: -100,
            scale: 0.85
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            scale: 1
          }}
          transition={{
            type: 'timing',
            duration: 1000,
          }}
        >
          <Text>Encontre o seu <TextHighlight>próximo</TextHighlight> evento de programação!</Text>
        </MotiView>
      </TextContainer>
      <MotiView
        from={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: [
            { value: 0, type: 'timing' },
            { value: 1, type: 'spring' },
          ]
        }}
        transition={{
          type: 'spring',
        }}
      >
        <Person />
      </MotiView>
      <MotiView
        from={{
          opacity: 0,
          scale: 0.6,
          translateY: 150
        }}
        animate={{
          opacity: 1,
          scale: 1,
          translateY: 0
        }}
        transition={{
          type: 'timing',
          duration: 1500,

        }}
      >
        <Button onPress={handleNext} bgColor={colors.primary}>
          <Arrow />
        </Button>
      </MotiView>
    </Container>
  )
}