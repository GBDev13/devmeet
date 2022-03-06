import React from 'react';
import { useTheme } from 'styled-components/native';
import { CardFooter, Container, DateContainer, DateText, FooterText, ShortDescription, Title } from './styles';
import ArrowIcon from '../../assets/Arrow-Orange.svg';
import { RectButtonProps } from 'react-native-gesture-handler';
import { formatDate } from '../../utils/formatDate';

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

  const formattedDate = formatDate(new Date(event.dataPublicacao), 'dd/MMM');
  const formattedHour = formatDate(new Date(event.dataPublicacao), 'HH:mm');

  return (
    <Container {...rest}>
      <DateContainer>
        <DateText>{formattedDate}</DateText>
        <DateText style={{ marginHorizontal: 5 }} color={colors.background}>-</DateText>
        <DateText fontWeight="light">{formattedHour}</DateText>
      </DateContainer>

      <Title>{event.titulo}</Title>
      <ShortDescription numberOfLines={3}>{event.descricao}</ShortDescription>
      <CardFooter>
        <FooterText>Organizado por: <FooterText isBold>{event.organizador}</FooterText></FooterText>
        <ArrowIcon />
      </CardFooter>
    </Container>
  )
}