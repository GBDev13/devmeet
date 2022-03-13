import { MotiText, MotiView } from "moti";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: flex-start;
  padding: 32px;
  padding-top: 62px;
`;

export const Text = styled(MotiText)`
  text-align: left;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;

  ${({ theme }) => css`
    color: ${theme.colors.textLight};
    font-size: ${RFValue(20)}px;
    font-family: ${theme.fonts.primary.regular};
    line-height: ${RFValue(32)}px;
  `}
`;

export const ButtonsContainer = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
})`
  flex: 1;
`;

export const NextContainer = styled.View`
  margin-top: 32px;
  width: 100%;
  height: 40px;
`;

export const NextMotiContent = styled(MotiView)`
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
`;

export const NextText = styled.Text`
  margin-right: 12px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary.semiBold};
  `}
`;
