import React,{useState} from 'react';
import {View,Text, TouchableOpacity,Modal,StyleSheet, ScrollView} from 'react-native';
import { useSelector } from 'react-redux';

export default function ViewCart({navigation}){

    const [modalVisible,setModalVisible] = useState(false);

    const items = useSelector(state => state.cartReducer.selectedItems.items)
    const count = useSelector(state => state.cartReducer.selectedItems.count)
    console.log("items:", items)
    const restaurantName = useSelector(state => state.cartReducer.selectedItems.restaurantName)
    const total = items?.map((item => Number(item.price.replace('₹','')))).reduce((prev,curr)=>prev+curr,0);

    const totalINR = total?.toLocaleString("en", {
        style:"currency",
        currency:"INR",
    }); 

    const styles = StyleSheet.create({
        modalContainer: {
            flex:1,
          //  justifyContent:"flex-start",
            marginTop:100,
            
            backgroundColor:"rgba(0,0,0,0.7)",
            
        },
        modalCheckoutContainer:{
            backgroundColor:'white',
            padding:16,
          //  height:500,
            borderWidth:1,
        },
        restaurantName:{
            textAlign:'center',
            fontWeight:'900',
            fontSize:22,
            marginBottom:10
        },
        subTotalContainer:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginTop:15,
            fontWeight:'600',
        },
        subtotalText:{
            textAlign:'left',
            fontWeight:'600',
            fontSize:15,
            marginBottom:10
        },
        modalCheckoutButton:{
            textAlign:"center",
            fontWeight:"600",
            fontSize:18,
            marginBottom:10
        },
        

      
    })

    const checkoutModalContent = () => {
        return(
           
            <View style={styles.modalContainer}>
            
                <View style={styles.modalCheckoutContainer}>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
                    {items.map(obj => (
                        <>
                        <Text style={styles.subTotalContainer}>{obj.title}</Text>
                        <Text style={styles.subTotalContainer}>X {obj.count}</Text>
                        <Text style={styles.subtotalText}>{obj.price}</Text>
                        
                       
                        </>
                    ))}
                    <View  style={styles.subTotalContainer}>
                         <Text style={{color:"black"}}>Total : ₹ {totalINR}</Text>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <TouchableOpacity style={{marginTop:20,
                        backgroundColor:"black",
                        alignItems:"center",
                        padding:13,
                        borderRadius:30,
                        width:300,
                        position:"relative"
                         }}
                         onPress={() =>
                        navigation.navigate("OrderCompleted")
                        }
                         >
                        <Text style={{color:"white",fontSize:20}}>CheckOut</Text>
                        <Text style={{
                            position:"absolute",
                            color:"white",
                            right:20,
                            fontSize:19,
                            top:15
                        }}> ₹  {total ? totalINR : ""}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            
            </View>
      )
    };
    return( 
        <>
        
        <Modal propagateSwipe={true}
        //  animationType='slide'
        style={{flex:1}}
          visible={modalVisible}
         // transparent={true}
          onRequestClose={() => setModalVisible(false) }
          presentationStyle='fullScreen'
          > 
        <ScrollView scrollEnabled={true} >
        {checkoutModalContent()}
        </ScrollView>
        </Modal>
        

        {total ? (
        <View style={{flex:1,alignItems:"center",
        flexDirection:'row',
        position:"absolute",
        bottom:90,
        
        }}>
        <View style={{
            flexDirection:'row',
            justifyContent:"center",
            width:"100%"
        }}>
            <TouchableOpacity style={{
                marginTop:20,
                backgroundColor:'black',
                flexDirection:"row",
                justifyContent:"flex-end",
                alignItems:"center",
                padding:15,
                borderRadius:30,
                width:300,
                position:'relative',
               
            }}
            onPress ={() => setModalVisible(true)}
            >
            <Text style={{color:'white',fontSize:20, marginRight:40,opacity:5}}>View Cart</Text>
            <Text style={{color:"white",fontSize:20,marginRight:20}}>  ₹ {totalINR}</Text>
            </TouchableOpacity>
        </View>
        </View>
        ):( 
            <></>
        )}
        </>
        
        
    )
}