import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface TextProps {
  isBold?: boolean;
}

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary.bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(28)}px;
    line-height: ${RFValue(40)}px;
  `}
`;

export const Text = styled.Text`
  text-align: left;
  width: 100%;
  margin: 35px 0;

  ${({ theme }) => css`
    color: ${theme.colors.textLight};
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.primary.regular};
    line-height: ${RFValue(24)}px;
  `}
`;

export const DateText = styled.Text<TextProps>`
  margin: 3px 0;
  ${({ theme, isBold }) => css`
    color: ${theme.colors.primary};
    font-size: ${RFValue(24)}px;
    font-family: ${isBold
      ? theme.fonts.secondary.bold
      : theme.fonts.secondary.medium};
  `};
`;

export const OrganizerContainer = styled.View<TextProps>`
  flex-direction: row;
  align-self: flex-start;
  margin-bottom: 30px;
`;

export const Organizer = styled.Text<TextProps>`
  opacity: 0.8;
  ${({ theme, isBold }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(10)}px;
    font-family: ${isBold
      ? theme.fonts.primary.bold
      : theme.fonts.primary.medium};
  `}
`;

export const EventTitle = styled(Title)`
  font-size: ${RFValue(20)}px;
`;
