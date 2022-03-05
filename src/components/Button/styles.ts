import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 16px;
`;
