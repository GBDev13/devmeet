import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../screens/Splash';
import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';
import { EventTypes } from '../screens/EventTypes';
import { EventDetails } from '../screens/EventDetails';
const { Navigator, Screen } = createStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
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
    </NavigationContainer>
  )
}