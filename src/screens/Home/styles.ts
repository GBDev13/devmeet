import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: flex-start;
  padding: 32px;
  padding-top: 62px;
`;

export const Header = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary.bold};
    color: ${theme.colors.white};
    font-size: ${RFValue(32)}px;
    line-height: ${RFValue(40)}px;
  `}
`;

export const Text = styled.Text`
  text-align: left;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 40px;

  ${({ theme }) => css`
    color: ${theme.colors.textLight};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary.regular};
    line-height: ${RFValue(24)}px;
  `}
`;

export const NoMoreText = styled.Text`
  color: #fff;
  opacity: 0.5;
  ${({ theme }) => css`
    font-size: ${RFValue(12)}px;
    font-family: ${theme.fonts.primary.regular};
  `}
`;
