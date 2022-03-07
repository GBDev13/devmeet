import React from 'react';
import { useTheme } from 'styled-components/native';
import { CardFooter, Container, DateContainer, DateText, FooterText, ShortDescription, Title } from './styles';
import ArrowIcon from '../../assets/Arrow-Orange.svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import { formatDate } from '../../utils/formatDate';
import { MotiView } from 'moti';

export interface IEvent {
  id: string;
  tipoId: number;
  dataInicio: string;
  dataPublicacao: string;
  descricao: string;
  link: string;
  organizador: string;
  titulo: string;
}

type Props = RectButtonProps & {
  event: IEvent;
};

export function EventCard({ event, ...rest }: Props) {
  const { colors } = useTheme();

  const formattedDate = formatDate(new Date(event.dataInicio), 'dd/MMM');
  const formattedHour = formatDate(new Date(event.dataInicio), 'HH:mm');

  return (
    <Container {...rest}>
      <DateContainer
        from={{
          opacity: 0,
          translateX: 50
        }}
        animate={{
          opacity: 1,
          translateX: 0
        }}
        transition={{
          type: 'timing',
          duration: 500,
        }}
      >
        <DateText>{formattedDate}</DateText>
        <DateText style={{ marginHorizontal: 5 }} color={colors.background}>-</DateText>
        <DateText fontWeight="light">{formattedHour}</DateText>
      </DateContainer>

      <MotiView
        from={{
          opacity: 0,
          scale: 0
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          type: 'timing',
          duration: 600
        }}
        style={{ width: '100%' }}
      >
        <Title>{event.titulo}</Title>
        <ShortDescription numberOfLines={3}>{event.descricao}</ShortDescription>
      </MotiView>
      <CardFooter
        from={{
          opacity: 0,
          width: '50%'
        }}
        animate={{
          opacity: 1,
          width: '100%'
        }}
        transition={{
          type: 'timing',
          duration: 700
        }}
      >
        <FooterText>Organizado por: <FooterText isBold>{event.organizador}</FooterText></FooterText>
        <ArrowIcon />
      </CardFooter>
    </Container>
  )
}