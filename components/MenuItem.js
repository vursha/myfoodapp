import React,{useState} from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { waterfall } from "./restaurantdatas";
import { Divider, CheckBox } from "react-native-elements";
//import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from "react-redux";



const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    marginRight:30,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
export default function MenuItem({restaurantName}) {
  // console.log("restaurantName",restaurantName)
const dispatch = useDispatch();
const selectItem = (food,check,id) => 
dispatch ({
  type:"ADD_TO_CART",
  id : id,
  payload:{...food, 
    food:food,
    restaurantName : restaurantName,
    checkboxValue: check}
});
const [local, setlocal]=useState(waterfall)

const handlechecked = (id, food) => {
  
  const temp2 = local.map(obj => {
      if(obj.id === id){
        obj={...obj,
          checked:!obj.checked
        }
      }
      return obj;
  })
  const check = !food.checked
  selectItem(food, check, id)
  setlocal(temp2);
}
   const cartItems = useSelector(
     (state) => state.cartReducer.selectedItems.items
   )
   const isFoodInCart = (food,cartItems) => 
     Boolean(cartItems.find((item) => item.title === food.title));
   


  return (
    <View>
     
        {local.map((food, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
               {/* <AntDesign name='checkcircle' checked={false}size={25} color='pink'/> */}
                <CheckBox
                checked={food.checked}
                fillColor="green"
                marginRight={90}
                isChecked = {isFoodInCart(food,cartItems)}
                // onPress ={(checkboxValue) => {selectItem(food); setcheck(!check)} }
                onPress={()=>handlechecked(food.id, food)}
                
              />
              <FoodInfo food={food} />
              <FoodImage food={food} />
              </View>
              <Divider
              width={0.5}
              orientation="vertical"
              style={{ marginHorizontal: 20 }}
            />
            </View>
        ))}
     
    </View>
  );
}


const FoodInfo = (props) => (
  <View style={{ width: 220, justifyContent: "space-evenly" ,padding:20}}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 ,marginRight:30}}
    />
  </View>
);
