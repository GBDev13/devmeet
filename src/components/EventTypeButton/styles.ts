import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { MotiView } from "moti";

interface BaseSelectedProps {
  isSelected: boolean;
}

interface TextProps extends BaseSelectedProps {
  color?: string;
}

interface ContainerProps extends BaseSelectedProps {
  hasSelected: boolean;
}

export const MotiContainer = styled(MotiView)`
  width: 100%;
  padding: 15px;
  min-height: 155px;
  justify-content: space-between;
`;

export const Container = styled(RectButton)<ContainerProps>`
  width: 48%;
  margin-top: 15px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 9px;

  ${({ hasSelected }) =>
    hasSelected &&
    css`
      opacity: 0.2;
    `};

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      opacity: 1;
      background: ${theme.colors.primary};
    `};
`;

export const Title = styled.Text<BaseSelectedProps>`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;
  margin-top: 30px;
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-family: ${theme.fonts.primary.medium};
  `};

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      color: ${theme.colors.white};
    `};
`;

export const Text = styled.Text<TextProps>`
  font-size: ${RFValue(9)}px;
  ${({ theme, color }) => css`
    color: ${color ?? theme.colors.textVeryLight};
    font-family: ${theme.fonts.primary.medium};
  `}

  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      color: ${theme.colors.white};
    `};
`;
