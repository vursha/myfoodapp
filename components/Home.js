import React, { useState } from 'react';
import {View,Text, SafeAreaView, ScrollView} from 'react-native';
import  Header from '../components/Header';
import SearchBar from './SearchBar';
import Categories from './Categories';
import FoodItems,{localFoods} from './FoodItems';
//import RestaurantDetail from './RestaurantDetail';


export default function Home({navigation}){
    const [FoodData,setFoodData] = useState(localFoods)
    return(
       
         <SafeAreaView style={{backgroundColor:'#eee',flex:1}}>
         <View style={{backgroundColor:'white',padding:15}}>
            <Header/>
            <SearchBar/>
         </View>
         <ScrollView >
            <Categories/>
            <FoodItems FoodData={FoodData} navigation = {navigation}/>
           
         </ScrollView>   
          {/* <RestaurantDetail/>  */}
        </SafeAreaView>
    )
}

