import * as React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons' 


 export const localFoods = [
    {
        name:'undersea restaurant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgXw0pqGYwHn2ieksnWU1IoVsu7TQUfvFwsQ&usqp=CAU',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1244,
        rating:4.7
    },
    {
        name:'Thalapakatti restaurant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-OPkDqIY9qprYMiS24nKZczvAnA6Ru9f6Ig&usqp=CAU',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1544,
        rating:4.9
    },
    {
        name:'waterfall restaurant',
        image : 'https://b.zmtcdn.com/data/pictures/5/18409005/489bed40fba1ae1cca2e66ca54161e39_featured_v2.jpg',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1214,
        rating:4.7
    },
    {
        name:'Holiday Inn restaurant',
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt-4TkThnebrlU2_PQ48X89iBqmYOuCWP60w&usqp=CAU',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:1097,
        rating:4.5
    },
    {
        name:'Turya restaurant',
        image : 'https://images.moneycontrol.com/static-mcnews/2022/03/Noon-interiors_Mumbai-4-1.jpg?impolicy=website&width=770&height=431',
        categories:['Cafe','Bar'],
        price:"$$",
        reviews:9874,
        rating:4.3
    },

]
export default function FoodItems(props){
  return(
  <TouchableOpacity activeOpacity={1} style={{marginBottom:30}}>
      {props.FoodData.map((foods,index) =>(

     
  <View key={index} style={{marginTop:10,padding:15,backgroundColor:"black"}}>
     <FoodImage image={foods.image}/>
     <FoodInfo name={foods.name}
               rating={foods.rating}
                />
  </View>
   ))}
  </TouchableOpacity>
  )
}

const FoodImage= (props) => (
    <>
    <Image source={{uri :props.image}}
    style={{width:'100%', height:180}}
    />
    <TouchableOpacity style={{position:'absolute', right:20, top:20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>
    </TouchableOpacity>
    </>
);

const FoodInfo = (props) => (
    <View style={{
        flexDirection:'row',
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:10,
    }}>
    <View >
    <Text style={{fontSize:15,fontWeight:"bold", color:'white'}}>{props.name} </Text>
    <Text style={{fontSize:12,color:'white'}}>30-45 min</Text>
    </View>
    <Text style={{color:'white'}}>{props.rating}</Text>
    </View>
)


