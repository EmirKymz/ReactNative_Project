import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import app from '../../firebaseConfig';
import { useSelector } from 'react-redux';


const rootNavigation = () => {
  const {isAuth} = useSelector((state) => state.user);

  return (
    <NavigationContainer independent={true}>

        {isAuth ? <UserStack /> : <AuthStack />}

    </NavigationContainer>
  )
}

export default rootNavigation

const styles = StyleSheet.create({})