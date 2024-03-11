import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Tema1 from './screens/Tema1';
import Tema2 from './screens/Tema2';
import Tema3 from './screens/Tema3';
import Tema4 from './screens/Tema4';
import Tema5 from './screens/Tema5';

import { Text } from 'react-native';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#344050'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
    <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown:false}}
    />
    <Stack.Screen
        name="Tema1"
        component={Tema1}
        options={{headerShown:false}}
    />
    <Stack.Screen
        name="Tema2"
        component={Tema2}
        options={{headerShown:false}}
    />
    <Stack.Screen
        name="Tema3"
        component={Tema3}
        options={{headerShown:false}}
    />
    <Stack.Screen
        name="Tema4"
        component={Tema4}
        options={{headerShown:false}}
    />
    <Stack.Screen
        name="Tema5"
        component={Tema5}
        options={{headerShown:false}}
    />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;