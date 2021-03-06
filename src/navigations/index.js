import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './app';

const Navigation = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default Navigation;
