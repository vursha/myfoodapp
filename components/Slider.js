import React,{useState} from 'react';
import { StyleSheet,ScrollView,View,Text,StatusBar,Image, Dimensions, TouchableOpacity } from 'react-native';


const images=[
    "https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/5f4c89614fa18_template_image_1598851425.webp",
    "https://png.pngtree.com/element_our/20190531/ourmid/pngtree-eat-food-micro-fat-girl-hamburger-donut-image_1311680.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGWRgaOZPRl5PKfXiO1bqz0LXkMN77qIxRpg&usqp=CAU",
    "https://png.pngtree.com/png-clipart/20190705/original/pngtree-a-family-eating-hot-pot-png-image_4283863.jpg"
]

// const width = Dimensions.get('screen').width;
// const height = Dimensions.get('screen').height;
const Slider = ({navigation}) => {
    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    // handleChange = () => {
      
    // }
    return(
        <View style={Styles.container}>
           <View style={Styles.wrap}>
               <ScrollView 
               onScroll = {({nativeEvent}) => onchange(nativeEvent)}
               showsHorizontalScrollIndicator={false}
               pagingEnabled
               horizontal
               style={Styles.wrap}
               >
                   {
                       images.map((e,index) => (
                           <>
                           {console.log(e)}
                            <Image
                                key={index}
                                resizeMode='contain'
                             //   style={Styles.wrap}4
                             style={{width: 400, height: 500}} 
                                source={{uri:e }}
                            />
                            </>
                       
                       )
                       )
                   }

               </ScrollView>
               <View style={Styles.wrapDot}>
                   {
                       images.map((e,index) => 
                       <Text key={e}
                            style={imgActive == index ? Styles.dotActive : Styles.dot}
                       >
                           ●
                       </Text>)
                   }
               </View>
               
            </View>
            <View>
                   <TouchableOpacity 
                   style={{backgroundColor:"skyblue",margin:70,padding:20,borderRadius:20}}
                   onPress={() =>
                    navigation.navigate("Login")
                    }
                   >
                       <Text style={{color:"black",textAlign:"center"}}
                      >Get Started</Text>
                   </TouchableOpacity>
               </View>
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"black"
    },
    wrap:{
        // width : width,
        // height: height 
        width: 400,
        height: 500,
        marginTop:50
    },
    wrapDot:{
        position:"absolute",
        //bottom:0,
        flexDirection:'row',
        alignSelf:'center',
        marginTop:60
    },
    dotActive:{
        margin : 3,
        color: "blue"
    },
    dot:{
        margin : 3,
        color : 'white'
    }
     
})
export default Slider;