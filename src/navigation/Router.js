import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, GettingStarted, Login,MovieList} from '../screens';

const Router = () => {
  const AppStack = createStackNavigator();

  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="GettingStarted" component={GettingStarted} />
        <AppStack.Screen name="Login" component={Login} /> 
        <AppStack.Screen name="MovieList" component={MovieList} />
    </AppStack.Navigator>
  );
};

export default Router;