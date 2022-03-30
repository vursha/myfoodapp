import React from 'react';
import {View,Text ,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import About from './About';
import {Divider} from 'react-native-elements'
import MenuItem from './MenuItem';
import ViewCart from './ViewCart';

export default function RestaurantDetail(props){

    const params  = props.route.params.item
    console.log("params",params)

    const image = props.route.params.image
    return(
        <View>
            <ScrollView>
            <About route={props.route} params={params} image={image} />
            <Divider width={1.8} style={{marginVertical:20}}/>
             <MenuItem restaurantName={params}/>
              <ViewCart navigation={props.navigation} /> 
             </ScrollView>
           
        </View>
    )
}