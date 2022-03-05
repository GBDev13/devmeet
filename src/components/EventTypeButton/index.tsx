import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { Container, Text, Title } from './styles';

export interface IEventType {
  id: number;
  icons: ReactNode[];
  title: string;
  count: number;
}

type Props = RectButtonProps & {
  eventType: IEventType;
  selectedType: IEventType | null;
}

export function EventTypeButton({ eventType, selectedType, ...rest }: Props) {
  const { colors } = useTheme();

  const { id, icons, title, count } = eventType;

  const hasSelected = selectedType !== null;
  const isSelected = selectedType?.id === id;

  return (
    <Container hasSelected={hasSelected} isSelected={isSelected} {...rest}>
      <View>
        {isSelected ? icons[1] : icons[0]}
        <Title isSelected={isSelected}>{title}</Title>
      </View>
      <Text isSelected={isSelected}>
        <Text isSelected={isSelected} color={colors.primary}>{count} eventos</Text> encontrados
      </Text>
    </Container>
  )
}