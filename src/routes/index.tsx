import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ToastProvider } from 'react-native-toast-notifications'
import { useTheme } from 'styled-components/native';
import { RoutesNavigator } from './RoutesNavigator';

export function Routes() {
  const { colors, fonts } = useTheme();

  return (
    <ToastProvider
      successColor={colors.success}
      dangerColor={colors.error}
      textStyle={{ fontFamily: fonts.primary.medium }}
    >
      <NavigationContainer>
        <RoutesNavigator />
      </NavigationContainer>
    </ToastProvider>
  )
}