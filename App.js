import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
      <Stack.Screen name="SignIn" component={SignIn} />
     
    </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
