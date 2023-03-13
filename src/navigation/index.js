import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Login from './LoginScreen';
import HomeScreen from './HomeScreen';
import GivePassword from './GivePassword';
import SplashScreens from './SplashScreens';
import FirstScreen from './FirstScreen';
import Products from './Products';
//export {default} from './Login';
const AppNavContainer = () => {
  return (
    <NavigationContainer>
      <SplashScreens />
      
      <FirstScreen />
      <Login />
      <GivePassword/>
      <HomeScreen />
      <Register />
      <DashBoard />
      <Products/>
    </NavigationContainer>
  );
};

export default AppNavContainer;
