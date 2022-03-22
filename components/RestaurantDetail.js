import React from 'react';
import {View,Text} from 'react-native';
import About from './About';
import {Divider} from 'react-native-elements'
import MenuItem from './MenuItem';

export default function RestaurantDetail({route}){
    return(
        <View>
            <About route={route}/>
            <Divider width={1.8} style={{marginVertical:20}}/>
             <MenuItem/> 
        </View>
    )
}