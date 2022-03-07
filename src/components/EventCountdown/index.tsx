import React from 'react';
import { UseTickerReturn } from '../../hooks/useTicker';
import { Container, ProgressContainer, ProgressContent, StartedEventContainer, StartedText, Text, TimeContainer, TimeItem, TimeLabel, TimeText } from './styles';
import { AnimatePresence, MotiView } from 'moti';

interface Props {
  timerData: UseTickerReturn;
}

export function EventCountdown({ timerData }: Props) {
  const { days, hours, minutes, percentage, isTimeUp } = timerData;

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

  return (
    <Container {...animation}>
      <AnimatePresence>
        {isTimeUp && (
          <StartedEventContainer {...animation}>
            <StartedText>O Evento já está rolando! 🎉</StartedText>
          </StartedEventContainer>
        )}
        {!isTimeUp && (
          <MotiView {...animation}>
            <Text>Tempo até o evento</Text>
            <TimeContainer>
              <TimeItem>
                <TimeText>{days}</TimeText>
                <TimeLabel>DAY(s)</TimeLabel>
              </TimeItem>

              <TimeItem>
                <TimeText>{hours}</TimeText>
                <TimeLabel>HOUR(s)</TimeLabel>
              </TimeItem>

              <TimeItem>
                <TimeText>{minutes}</TimeText>
                <TimeLabel>MIN(s)</TimeLabel>
              </TimeItem>
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