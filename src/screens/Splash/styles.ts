import styled from "styled-components/native";
import PatternImage from "../../assets/pattern.svg";
import { RFValue } from "react-native-responsive-fontsize";
import { MotiView } from "moti";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const PatternContainer = styled(MotiView)`
  position: absolute;
  top: ${RFValue(50)}px;
`;

export const Pattern = styled(PatternImage)``;

export const LogoContainer = styled(MotiView)``;
