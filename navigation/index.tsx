import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Button, ColorSchemeName, View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import { observer, Provider } from "mobx-react"
import NavigationStore from "./NavigationStore"

import AuthScreen from '../screens/AuthScreen';
import NewAccount from "../screens/NewAccountScreen"

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = observer(() => {
  return (
      <Stack.Navigator>
       { NavigationStore.isSigIn ? (
          <Stack.Screen name="Root" component={BottomTabNavigator} />   
          ) : (<Stack.Screen name="AuthScreen" component={AuthScreen} options={{ headerShown: false  }} />)
       } 
      </Stack.Navigator>
  ) 
} )


