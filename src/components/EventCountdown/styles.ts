import styled, { css } from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { MotiView } from "moti";

export const Container = styled(MotiView)`
  width: 100%;
  margin-top: 60px;
`;

export const Text = styled.Text`
  margin-bottom: 30px;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(16)}px;
    font-family: ${theme.fonts.primary.semiBold};
  `}
`;

export const TimeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TimeItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TimeText = styled.Text`
  margin-right: 5px;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(40)}px;
    font-family: ${theme.fonts.secondary.bold};
  `}
`;

export const TimeLabel = styled.Text`
  opacity: 0.5;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(10)}px;
    font-family: ${theme.fonts.primary.semiBold};
  `}
`;

export const StartedEventContainer = styled(MotiView)`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  padding: 10px 15px;
  border-radius: 9px;
  border-bottom-width: 8px;
  border-bottom-color: ${({ theme }) => theme.colors.success};
`;

export const StartedText = styled.Text`
  max-width: 70%;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${RFValue(19)}px;
    font-family: ${theme.fonts.primary.bold};
  `}
`;

export const ProgressContainer = styled.View`
  width: 100%;
  height: 9px;
  border-radius: 999px;
  background: ${({ theme }) => theme.colors.shapeDark};
  margin-top: 8px;
  overflow: hidden;
`;

interface ProgressProps {
  progress: number;
}

export const ProgressContent = styled.View<ProgressProps>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 999px;
`;
