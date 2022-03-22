import * as React from 'react';
import { Text, View, ScrollView,Image } from 'react-native';
const items=[
    {
        image:require('../Images/images/shopping-bag.png'),
        text:"Pick-Up"
    },
    {
        image:require('../Images/images/soft-drink.png'),
        text:"Soft Drinks"
    },
    {
        image:require('../Images/images/bread.png'),
        text:"Bakery Items"
    },
    {
        image:require('../Images/images/fast-food.png'),
        text:"Fast Foods"
    },
    {
        image:require('../Images/images/deals.png'),
        text:"Deals"
    },
    {
        image:require('../Images/images/coffee.png'),
        text:" Coffee & Tea"
    },
    {
        image:require('../Images/images/desserts.png'),
        text:"Desserts"
    },

]
export default function Categories(){
  return(
    <View style={{
        marginTop:5,
        backgroundColor:"#fff",
        paddingVertical:10,
        paddingLeft:20 
    }}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
       {items.map((item,index)=>(
       <View key={index} style={{alignItems:"center",marginRight:30}}>
      <Image source={item.image} style={{
          width:50,
          height:40,
          resizeMode:"contain"
      }}/>
      <Text style={{fontSize:13,fontWeight:"900"}}>{item.text}</Text>
      </View>
      ))}
   </ScrollView>
   </View>
  )
}