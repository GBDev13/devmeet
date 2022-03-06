import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/Splash';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';
import { EventTypes } from '../screens/EventTypes';
import { EventDetails } from '../screens/EventDetails';
const { Navigator, Screen } = createStackNavigator();
import { useNotifications } from '../hooks/useNotification';

export function RoutesNavigator() {
  useNotifications();

  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
      <Screen
        name="Splash"
        component={Splash}
      />
      <Screen
        name="Welcome"
        component={Welcome}
      />
      <Screen
        name="EventTypes"
        component={EventTypes}
      />
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="EventDetails"
        component={EventDetails}
      />
    </Navigator>
  )
}