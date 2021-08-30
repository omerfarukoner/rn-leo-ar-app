import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import List from '../screens/List';
import { COLORS, FONTS } from '../constants';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      headerTintColor: COLORS.black,
      headerTitleAlign: 'center',
      headerStyle: styles.headerStyle,
      headerTitleStyle: styles.headerTitleStyle,
      cardStyle: {
        backgroundColor: COLORS.white,
      },
    }}>
    <Stack.Screen component={Splash} name="Splash" options={{ headerShown: false }} />
    <Stack.Screen component={List} name="CharacterList" />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: COLORS.offWhite,
    height: 115,
  },
  headerTitleStyle: {
    color: COLORS.black,
    ...FONTS.h1,
    fontWeight: '500',
  },
});
