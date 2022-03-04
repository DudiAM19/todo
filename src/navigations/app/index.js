import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, ItemList} from '../../screen';

const App = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <App.Navigator screenOptions={{headerShown: false}}>
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen name="ItemList" component={ItemList} />
    </App.Navigator>
  );
};

export default AppNavigation;
