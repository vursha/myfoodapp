import React from 'react';
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native';
import { waterfall } from './restaurantdatas';
import {Divider} from 'react-native-elements'





const styles= StyleSheet.create({
    menuItemStyle : {
        flexDirection : 'row',
        justifyContent:"space-between",
        margin:20
    },
    titleStyle:{
        fontSize:19,
        fontWeight:"600"
    }
})
export default function MenuItem(){
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        {waterfall.map((food,index)=>(
        <View key={index}>
        <View style={styles.menuItemStyle}>
            <FoodInfo food={food}/>
            <FoodImage food={food}/>
        </View>
        <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20}}/>
        </View>
      
        ))}
         </ScrollView>
    )
}
const FoodInfo = (props) => (
    <View style = {{width:240,justifyContent:'space-evenly'}}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
)

const FoodImage = (props) => (
    <View>
        <Image source={{uri : props.food.image}} style={{width:100,height:100,borderRadius:8}}/>
    </View>
) 