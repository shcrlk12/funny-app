/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import HomePage from '@pages/HomePage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LanguagePage from '@pages/LanguagePage';
import {Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#16A6F3',
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: 'Everything in Korea'}}
          />
          <Stack.Screen
            name="language-best"
            component={LanguagePage}
            options={{
              title: 'Language',

              headerRight: () => (
                <TouchableOpacity
                  style={{
                    width: 25,
                    height: 25,
                  }}>
                  <Image
                    source={require('@images/hamburger.png')}
                    style={{width: '100%', height: '100%'}}
                  />
                </TouchableOpacity>
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
