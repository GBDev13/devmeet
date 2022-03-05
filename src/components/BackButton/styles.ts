import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const Container = styled(RectButton)`
  align-items: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.primary.medium};
    font-size: ${RFValue(12)}px;
    color: ${theme.colors.textLight};
    margin-left: 5px;
  `}
`;
