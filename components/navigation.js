import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import RestaurantDetail from './RestaurantDetail';
import OrderCompleted from './OrderCompleted';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../redux/store';
import Slider from './Slider';
import Login from './Login'
import ViewCart from './ViewCart';

const store = configureStore();

export  default function RootNavigation(){
    const Stack = createNativeStackNavigator();

    const screenOption={
        headerShown : false,
    };
    return(
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Slider'
                screenOptions={screenOption}
                >
                    <Stack.Screen name='Slider' component={Slider}/>
                    <Stack.Screen name='Login' component={Login}/>
                    <Stack.Screen name='Home' component={Home}/>
                    <Stack.Screen name='RestaurantDetail' component={RestaurantDetail}/>
                    <Stack.Screen name="OrderCompleted" component={OrderCompleted}/>
                    {/* <Stack.Screen name='ViewCart' component={ViewCart}/> */}
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>
    )
}