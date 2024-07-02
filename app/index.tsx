import React from 'react'
import LoginPage from './src/screens/LoginPage'
import {NavigationContainer} from '@react-navigation/native';
import SignupPage from './src/screens/SignupPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Signup" component={SignupPage} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index
