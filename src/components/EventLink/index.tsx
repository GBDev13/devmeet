import React, { useState } from 'react';
import { Button, ButtonsContainer, Container, LinkText } from './styles';
import { useTheme } from 'styled-components/native';
import { rgba } from 'polished';
import * as Clipboard from 'expo-clipboard';
import { useToast } from "react-native-toast-notifications";

import NotifyIcon from '../../assets/notify.svg';
import NotifyOff from '../../assets/cancelNotify.svg';

import ArrowSuccess from '../../assets/Arrow-Success.svg';
import ArrowWhite from '../../assets/Arrow-White.svg';

interface Props {
  link: string;
  isTimeUp: boolean;
}

export function EventLink({ link, isTimeUp }: Props) {
  const { colors } = useTheme();
  const toast = useToast();

  const [hasNotify, setHasNotify] = useState(false);

  function handleNotify() {
    setHasNotify(old => !old);
  }

  function handleSetLink() {
    Clipboard.setString(link)
    toast.show("Link copiado para sua área de transferência!", {
      type: "success",
      duration: 4000,
    });
  }

  return (
    <Container>
      <LinkText>{link}</LinkText>

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
          onPress={handleSetLink}
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