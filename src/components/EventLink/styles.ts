import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button as ButtonBase } from "../Button";
import { BtnProps } from "../Button/styles";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 12px 20px;
  width: 100%;
`;

export const LinkText = styled.Text`
  opacity: 0.7;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.secondary.semiBold};
  `}
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const Button = styled(ButtonBase)`
  margin-left: 10px;
`;
