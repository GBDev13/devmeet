import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateTextProps {
  fontWeight?: string;
  color?: string;
}

interface FooterTextProps {
  isBold?: boolean;
}

export const Container = styled(RectButton)`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  padding: 16px;
  border-radius: 9px;
`;

export const DateText = styled.Text<DateTextProps>`
  font-size: ${RFValue(16)}px;
  ${({ theme, fontWeight, color }) => css`
    color: ${color ?? theme.colors.primary};
    font-family: ${theme.fonts.secondary.bold};
  `}
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(24)}px;
  margin: 15px 0;
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-family: ${theme.fonts.primary.extraBold};
  `}
`;

export const ShortDescription = styled.Text`
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(14)}px;
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.primary.regular};
  `}
`;

export const CardFooter = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const FooterText = styled.Text<FooterTextProps>`
  font-size: ${RFValue(8)}px;
  ${({ theme, isBold }) => css`
    color: ${theme.colors.background};
    font-family: ${isBold
      ? theme.fonts.primary.bold
      : theme.fonts.primary.regular};
  `}
`;
