import React from 'react';
import { UseTickerReturn } from '../../hooks/useTicker';
import { Container, ProgressContainer, ProgressContent, StartedEventContainer, StartedText, Text, TimeContainer, TimeItem, TimeLabel, TimeText } from './styles';

interface Props {
  timerData: UseTickerReturn;
}

export function EventCountdown({ timerData }: Props) {
  const { days, hours, minutes, percentage, isTimeUp } = timerData;

  return (
    <Container>
      {isTimeUp ? (
        <StartedEventContainer>
          <StartedText>O Evento já está rolando! 🎉</StartedText>
        </StartedEventContainer>
      ) : (
        <>
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
        </>
      )}
    </Container>
  )
}