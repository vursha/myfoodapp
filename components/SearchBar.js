import React from 'react';
import {View,Text, TextInput} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { localFoods } from './FoodItems';
import { useState } from 'react';


export default function SearchBar(){
    const [search,setSearch] = useState("")
    console.log("search :",search)
    return(
        <View style={{marginTop:15,flexDirection:'row'}}>
        {localFoods.filter((value)=>{
            if(search === ''){
                return value;
            }else if(value.name.toLowerCase().includes(search?.toLowerCase()))
            {
                return value;
            }
        }).map((obj)=>(
            <View style={{top:30,position:"absolute"}}>
                {/* <Text>{obj.name}</Text> */}
            </View>
        ))}
         {/* <GooglePlacesAutocomplete 
         placeholder='Search'
         styles={{
             textInput:{
                 backgroundColor:'#eee',
                 borderRadius:20,
                 fontWeight:"700",
                 marginTop:7
             },
             textInputContainer:{
                backgroundColor:'#eee',
                borderRadius:50,
                flexDirection:'row',
                alignItems:'center',
                marginRight:10
             }
         }}
         renderLeftButton={() =>(
             <View style={{marginLeft:10}}>
                 <Ionicons name='location-sharp' size={24}/>
             </View>
         )}
         renderRightButton={() =>(
             <View style={{
                    flexDirection:'row',
                    marginRight:8,
                    backgroundColor:'white',
                    padding:9,
                    borderRadius:30,
                    alignItems:'center'
             }}>
                 <AntDesign name='clockcircle' size={11} style={{marginRight:6}}/>
                 <Text>Search</Text>
             </View>
         )}
         /> */}
         <TextInput
            placeholder='search'
            onChangeText={(obj)=>setSearch(obj)}
            // onChange={(obj)=>setSearch(obj)}
         />
       
        </View>
    )
}

