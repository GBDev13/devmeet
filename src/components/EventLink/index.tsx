import React, { useState } from 'react';
import { Button, ButtonsContainer, Container, LinkText } from './styles';
import { useTheme } from 'styled-components/native';
import { rgba } from 'polished';

import NotifyIcon from '../../assets/notify.svg';
import NotifyOff from '../../assets/cancelNotify.svg';

import ArrowSuccess from '../../assets/Arrow-Success.svg';
import ArrowWhite from '../../assets/Arrow-White.svg';

interface Props {
  isTimeUp: boolean;
}

export function EventLink({ isTimeUp }: Props) {
  const { colors } = useTheme();

  const [hasNotify, setHasNotify] = useState(false);

  function handleNotify() {
    setHasNotify(old => !old);
  }

  return (
    <Container>
      <LinkText>meet.google/12345</LinkText>

      <ButtonsContainer>
        <Button
          onPress={handleNotify}
          bgColor={hasNotify ? rgba(colors.error, 0.2) : rgba(colors.white, 0.2)}
          size="24px"
          radius="6px"
        >
          {hasNotify ? <NotifyOff /> : <NotifyIcon />}
        </Button>
        <Button
          bgColor={isTimeUp ? colors.success : rgba(colors.success, 0.2)}
          size="24px"
          radius="6px"
        >
          {isTimeUp ? <ArrowWhite /> : <ArrowSuccess />}
        </Button>
      </ButtonsContainer>
    </Container>
  )
}