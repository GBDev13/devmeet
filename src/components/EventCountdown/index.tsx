import React from 'react';
import { UseTickerReturn } from '../../hooks/useTicker';
import { Container, ProgressContainer, ProgressContent, StartedEventContainer, StartedText, Text, TimeContainer, TimeItem, TimeLabel, TimeText } from './styles';
import { AnimatePresence, MotiView } from 'moti';
import { useTheme } from 'styled-components/native';

interface Props {
  timerData: UseTickerReturn;
}

export function EventCountdown({ timerData }: Props) {
  const { days, hours, minutes, percentage, seconds, isTimeUp, isEnded } = timerData;

  const animation = {
    from:{
      opacity: 0,
      translateY: 100
    },
    exit:{
      opacity: 0,
      translateY: 100
    },
    animate:{
      opacity: 1,
      translateY: 0
    },
    transition:{
      type: 'spring',
    }
  };

  const numberDays = Number(days);

  const { colors } = useTheme();

  return (
    <Container {...animation}>
      <AnimatePresence>
        {isEnded && (
          <StartedEventContainer borderColor={colors.error} {...animation}>
            <StartedText>O Evento já foi finalizado 😢</StartedText>
          </StartedEventContainer>
        )}
        {isTimeUp && !isEnded && (
          <StartedEventContainer {...animation}>
            <StartedText>O Evento já está rolando! 🎉</StartedText>
          </StartedEventContainer>
        )}
        {!isTimeUp && (
          <MotiView {...animation}>
            <Text>Tempo até o evento</Text>
            <TimeContainer>
              {numberDays >= 1 && (
                <TimeItem {...animation}>
                  <TimeText>{days}</TimeText>
                  <TimeLabel>DAY(s)</TimeLabel>
                </TimeItem>
              )}

              <TimeItem>
                <TimeText>{hours}</TimeText>
                <TimeLabel>HOUR(s)</TimeLabel>
              </TimeItem>

              <TimeItem>
                <TimeText>{minutes}</TimeText>
                <TimeLabel>MIN(s)</TimeLabel>
              </TimeItem>

              {numberDays <= 0 && (
                <TimeItem {...animation}>
                  <TimeText>{seconds}</TimeText>
                  <TimeLabel>SEC(s)</TimeLabel>
                </TimeItem>
              )}
            </TimeContainer>

            <ProgressContainer>
              <ProgressContent progress={percentage} />
            </ProgressContainer>
          </MotiView>
        )}
      </AnimatePresence>
    </Container>
  )
}