import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components/native';
import { Container, Text, Title } from './styles';

import ProgrammingIcon from '../../assets/Programing-Terminal.svg';
import ProgrammingIconWhite from '../../assets/Programing-Terminal-White.svg';

import LaptopIcon from '../../assets/laptop-programming-code.svg';
import LaptopIconWhite from '../../assets/laptop-programming-code-White.svg';

import GitIcon from '../../assets/hierarchy.svg';
import GitIconWhite from '../../assets/hierarchy-White.svg';

import IphoneIcon from '../../assets/iPhone-X-Orange.svg';
import IphoneIconWhite from '../../assets/iPhone-X-White.svg';

import AgileIcon from '../../assets/agile.svg';
import AgileIconWhite from '../../assets/agile-White.svg';

import Terminal from '../../assets/terminal.svg';
import TerminalWhite from '../../assets/terminal-White.svg';

import Bezier from '../../assets/bezier.svg';
import BezierWhite from '../../assets/bezier-White.svg';

type IconTypes = "PROGRAMING" | "LAPTOP" | "INTEGRATION" | "MOBILE" | "BLOCKS_CODE_CHECKMARK" | "TERMINAL" | "BEZIER_CURVE";

export interface IEventType {
  id: number;
  icon: IconTypes;
  text: string;
  count: number;
}

type Props = RectButtonProps & {
  eventType: IEventType;
  selectedType: IEventType | null;
}

const icons = {
  "PROGRAMING": [<ProgrammingIcon />, <ProgrammingIconWhite />],
  "LAPTOP": [<LaptopIcon />, <LaptopIconWhite />],
  "INTEGRATION": [<GitIcon />, <GitIconWhite />],
  "MOBILE": [<IphoneIcon />, <IphoneIconWhite />],
  "BLOCKS_CODE_CHECKMARK": [<AgileIcon />, <AgileIconWhite />],
  "TERMINAL": [<Terminal />, <TerminalWhite />],
  "BEZIER_CURVE": [<Bezier />, <BezierWhite />]
};

export function EventTypeButton({ eventType, selectedType, ...rest }: Props) {
  const { colors } = useTheme();

  const { id, icon, text, count } = eventType;

  const hasSelected = selectedType !== null;
  const isSelected = selectedType?.id === id;

  const currentIcon = icons[icon];

  return (
    <Container hasSelected={hasSelected} isSelected={isSelected} {...rest}>
      <View>
        {isSelected ? currentIcon[1] : currentIcon[0]}
        <Title isSelected={isSelected}>{text}</Title>
      </View>
      <Text isSelected={isSelected}>
        <Text isSelected={isSelected} color={colors.primary}>{count} {count <= 1 ? 'evento' : 'eventos'}</Text> encontrados
      </Text>
    </Container>
  )
}