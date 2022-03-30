import React from 'react';
import {View,Text,Image} from 'react-native';

const image = 'https://b.zmtcdn.com/data/pictures/5/18409005/489bed40fba1ae1cca2e66ca54161e39_featured_v2.jpg'
const title = 'Waterfall Restaurant'


export default function About(props){
    console.log("props",props.params)
    return(
        <View>
            <RestaurantImage image={props.image}/>
            <RestaurantTitle title={props.params}/>
        </View>
    )
}

const RestaurantImage = (props) => (
    <Image source={{uri: props.image}} style={{width:"100%", height:180}}/>
);

const RestaurantTitle = (props) => (
    <Text style={{fontSize:29,
                  fontWeight:"600",
                  marginTop:10,
                  marginHorizontal:15
                }}>{props.title}</Text>
)