import React from 'react';
import {createStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import RestaurantDetail from './RestaurantDetail';

export  default function RootNavigation(){
    const Stack = createStackNavigator();

    const screenOption={
        headerShown : false,
    };
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
            // screenOptions={screenOption}
            >
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}