import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface BaseSelectedProps {
  isSelected: boolean;
}

interface TextProps extends BaseSelectedProps {
  color?: string;
}

interface ContainerProps extends BaseSelectedProps {
  hasSelected: boolean;
}

export const Container = styled(RectButton)<ContainerProps>`
  background: ${({ theme }) => theme.colors.white};
  padding: 15px;
  border-radius: 9px;
  height: 163px;
  width: 48%;
  justify-content: space-between;
  margin-top: 15px;

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
  font-size: ${RFValue(13)}px;
  line-height: ${RFValue(18)}px;
  margin-top: 30px;
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
  font-size: ${RFValue(10)}px;
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
