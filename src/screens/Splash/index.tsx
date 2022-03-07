import React, { useEffect } from 'react';
import { Container, LogoContainer, Pattern, PatternContainer } from "./styles";
import Logo from '../../assets/logo.svg';
import { useNavigation } from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation<any>();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate("Welcome");
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }
  }, [])

  return (
    <Container>
      <PatternContainer
        from={{
          opacity: 0.5,
          scale: 1.05
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          loop: true,
          type: 'timing',
          duration: 1000,
          delay: 100,
        }}
      >
        <Pattern />
      </PatternContainer>
      <LogoContainer
        from={{
          scale: 0.75,
          opacity: 0
        }}
        animate={{
          scale: 1,
          opacity: 1
        }}
        transition={{
          type: 'spring',
          duration: 800,
        }}
      >
        <Logo />
      </LogoContainer>
    </Container>
  )
}