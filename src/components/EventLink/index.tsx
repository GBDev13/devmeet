import React, { useLayoutEffect, useState } from 'react';
import { Button, ButtonsContainer, Container, LinkText } from './styles';
import { useTheme } from 'styled-components/native';
import { rgba } from 'polished';
import * as Clipboard from 'expo-clipboard';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useToast } from "react-native-toast-notifications";

import NotifyIcon from '../../assets/notify.svg';
import NotifyOff from '../../assets/cancelNotify.svg';

import ArrowSuccess from '../../assets/Arrow-Success.svg';
import ArrowWhite from '../../assets/Arrow-White.svg';
import { IEvent } from '../EventCard';
import { isBefore } from 'date-fns';

interface Props {
  event: IEvent;
  isTimeUp: boolean;
  isEnded: boolean;
}

export function EventLink({ event, isTimeUp, isEnded }: Props) {
  const { colors } = useTheme();
  const toast = useToast();

  const [hasNotify, setHasNotify] = useState(false);
  const [notify, setNotify] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  async function getNotifyId() {
    try {
      setIsLoading(true);
      const jsonData = await AsyncStorage.getItem(`notify${event.id}`);
      const parsed = jsonData ? JSON.parse(jsonData) : {};
      const notifyId = parsed?.notifyId;

      setNotify(notifyId ?? '');
      if(!!notifyId) {
        setHasNotify(true);
        const before = isBefore(new Date(parsed.dataInicio), new Date());
        if (before) {
         await AsyncStorage.removeItem(`notify${event.id}`);
         setHasNotify(false);
        }

      } else {
        setHasNotify(false);
      }
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    getNotifyId();
  }, [])

  async function handleNotify() {
    if(isLoading) return;
    try {
      setIsLoading(true);
      if(!notify) {
        if(isEnded) return;
        
        // const now = new Date();
        // now.setMinutes(now.getMinutes() + 1);
        // const fakeData = now;

        const notifyId = await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Dev Meet iniciando 🚀',
            body: `O evento '${event.titulo}' está prestes a iniciar!`,
            data: { event },
          },
          trigger: {
            date: new Date(event.dataInicio)
            // date: fakeData
          },
        });
        
        const data = {
          notifyId,
          ...event
        };

        await AsyncStorage.setItem(`notify${event.id}`, JSON.stringify(data));
        setNotify(notifyId);

        toast.show("Você será notificado(a) quando o evento iniciar!", {
          type: "success",
          duration: 4000,
        });
      } else {
        await Notifications.cancelScheduledNotificationAsync(notify);
        await AsyncStorage.removeItem(`notify${event.id}`);
        toast.show("A notificação para esse evento foi removida!", {
          type: "success",
          duration: 4000,
        });
      }
      setHasNotify(old => !old);
    } catch (err) {
      toast.show("Ocorreu um erro ao alterar as notificações", {
        type: "danger",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  }

  function handleSetLink() {
    if(isEnded) return;
    Clipboard.setString(event.link)
    toast.show("Link copiado para sua área de transferência!", {
      type: "success",
      duration: 4000,
    });
  }

  return (
    <Container>
      <LinkText>{event.link}</LinkText>

      <ButtonsContainer>
        {!isTimeUp && !isEnded && (
          <Button
            onPress={handleNotify}
            bgColor={hasNotify ? rgba(colors.error, 0.2) : rgba(colors.white, 0.2)}
            size="24px"
            radius="6px"
          >
            {hasNotify ? <NotifyOff /> : <NotifyIcon />}
          </Button>
        )}
        {!isEnded && (
          <Button
            onPress={handleSetLink}
            bgColor={isTimeUp && !isEnded ? colors.success : rgba(colors.success, 0.2)}
            size="24px"
            radius="6px"
          >
            {isTimeUp && !isEnded ? <ArrowWhite /> : <ArrowSuccess />}
          </Button>
        )}
      </ButtonsContainer>
    </Container>
  )
}