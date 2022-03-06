import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';

import * as Notifications from 'expo-notifications';

import { 
  useFonts,
  Epilogue_400Regular,
  Epilogue_700Bold,
  Epilogue_800ExtraBold,
  Epilogue_500Medium,
  Epilogue_600SemiBold
} from '@expo-google-fonts/epilogue';

import {
  Rajdhani_700Bold,
  Rajdhani_600SemiBold,
  Rajdhani_500Medium
} from '@expo-google-fonts/rajdhani';

import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
    Epilogue_700Bold,
    Epilogue_800ExtraBold,
    Epilogue_500Medium,
    Epilogue_600SemiBold,
    Rajdhani_700Bold,
    Rajdhani_600SemiBold,
    Rajdhani_500Medium
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </ThemeProvider>
  )
}