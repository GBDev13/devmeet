import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export interface BtnProps {
  bgColor: string;
  size?: string;
  radius?: string;
}

export const Container = styled(RectButton)<BtnProps>`
  background: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size ?? "56px"};
  height: ${({ size }) => size ?? "56px"};
  border-radius: ${({ radius }) => radius ?? "16px"};
`;
