import styled from "styled-components/native";
import PatternImage from "../../assets/pattern.svg";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const Pattern = styled(PatternImage)`
  position: absolute;
  top: ${RFValue(50)}px;
`;
