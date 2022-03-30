import React from 'react';
import {View,Text} from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from "@expo/vector-icons"
import LottieView from 'lottie-react-native';
// import { Cartcheck } from 'react-native-vector-icons/MaterialCommunityIcons'

export default function OrderCompleted(){
    const items = useSelector(state => state.cartReducer.selectedItems.items)
    console.log("items:", items)
    const restaurantName = useSelector(state => state.cartReducer.selectedItems.restaurantName)
    const total = items?.map((item => Number(item.price.replace('₹','')))).reduce((prev,curr)=>prev+curr,0);

    const totalINR = total?.toLocaleString("en", {
        style:"currency",
        currency:"INR",
    }); 
    return(
        <View style={{flex:1,backgroundColor:"white", marginTop:50}}>
            {/* <ion-icon name="cart"></ion-icon> */}
            {/* <Ionicons name="checkmark-circle-outline" size={90} style={{height:100,alignSelf:'center',marginBottom:30,color:"green"}}/> */}
            <LottieView style={{
                height:100,
                alignSelf:"center",
                marginBottom : 50,
                
             }}
            source={require('../Images/animations/check-mark.json')}
            autoPlay
            speed={0.5}
            loop={false}
           />
            <Text style={{fontSize:20,fontWeight:"bold"}}>Your Order at {restaurantName} has been placed for ₹{totalINR}</Text>
            <LottieView 
                style={{ height:200,alignSelf:"center"}}
                source={require("../Images/animations/cooking.json")}
                autoPlay
                speed={0.5}
                loop={true}
            />
        </View>
    )
}