import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: flex-start;
  text-align: left;
  padding: 0 ${RFValue(55)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: ${RFValue(40)}px;
  margin-bottom: ${RFValue(30)}px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(40)}px;
`;

export const TextHighlight = styled(Text)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
`;
