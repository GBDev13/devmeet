import React, { useEffect } from 'react';
import { Container, Pattern } from "./styles";
import Logo from '../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation<any>();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Welcome");
    }, 1000);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <Container>
      <Pattern />
      <Logo />
    </Container>
  )
}