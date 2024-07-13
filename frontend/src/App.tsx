/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Home from './pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguageBest from './pages/LanguageBest';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Everything in Korea',
              headerStyle: {
                backgroundColor: '#16A6F3',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          />
          <Stack.Screen
            name="language-best"
            component={LanguageBest}
            options={{
              title: 'Language',
              headerStyle: {
                backgroundColor: '#16A6F3',
              },
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
