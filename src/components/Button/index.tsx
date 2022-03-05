import React, { ReactNode } from 'react';
import { BtnProps, Container } from "./styles";

interface Props extends BtnProps {
  children: ReactNode;
}

export function Button({ children, ...rest }: Props) {
  return (
    <Container {...rest}>
      {children}
    </Container>
  )
}