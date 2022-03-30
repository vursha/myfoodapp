
import React,{Component} from 'react';
import { TouchableOpacity, View , Text,Dimensions , TextInput , StyleSheet,Image,ImageBackground,TouchableHighlight, Alert} from 'react-native';

const userinfo={userName:'vursha' , password:'12345'}
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
        userName:'',
        password:'',
    }}
    handleChange=(name,text)=>{
        this.setState({[name]: text})
    }
    navigation = this.props.navigation
    login = () =>{
        //alert('logged In')
        this.setState({userName :'' , password :''})
        if (userinfo.userName === this.state.userName &&
            userinfo.password === this.state.password){
                // alert('logged In')
                this.navigation.navigate("Home")
            }else{
                Alert.alert('username or password is incorrect!!!')
            }
    }
    render (){
        return(
            <View style={styles.container}>
                <View >
                <ImageBackground
                style={styles.backimg}  
                source={{uri:"https://i.pinimg.com/736x/1d/a2/18/1da218e176e153b1711ce36006f0c13a.jpg"}}/>
                </View>
                <View style={{margin:20}}>
                <Text style={styles.text}>LOGIN</Text>
                </View>
                <View>
                <Image style={{height:150,width:150,borderRadius:30,marginLeft:130,alignItems:"center"}}
                source={{uri:"https://www.chowhound.com/a/img/resize/e9c5b3c8f1f8ce3e8877348a6d4fcf1a9c59fbf0/2018/02/iknowthechef-app-chowhound-670x672.jpg?fit=bounds&width=800"}}
                />
                </View>
                <View style={{marginBottom:40}}>
                <TextInput 
                style={styles.input}
                placeholder="UserName"
                placeholderTextColor='black'
                value={this.state.userName}
                onChangeText={(text)=>{
                    this.handleChange("userName",text)
                }}
                autoCapitalize='none'
                maxLength={10}
                />

                <TextInput 
                style={styles.input2}
                placeholder="Password"
                placeholderTextColor='black'
                value={this.state.password}
                onChangeText={(text) => {
                    this.handleChange("password",text)
                }}
                autoCapitalize='none'
                maxLength={10}
                secureTextEntry = {true}
                />
                </View>
                 <View style={styles.btnContainer}>
                 <TouchableOpacity 
                 style={styles.button}
                 onPress={ this.login}
                //  onPress={()=> this.navigation.navigate("Home")}
                 >
                 <Text style={styles.btnText}>Login</Text>
                 </TouchableOpacity>

                 {/* <TouchableHighlight 
                 style={styles.button}
                 onPress={() => alert("Sign Up")}
                 >
                 <Text style={styles.btnText}>SignUp</Text>
                 </TouchableHighlight> */}
             </View>


             {/* <View style={styles.text2}>
             <Text style={{color:"white" ,marginRight:10}}>Already have an account? </Text>
             <Text style={styles.text1}>Sign In</Text>
             </View> */}
            </View>
        )}
    
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        // justifyContent:"center",
        // alignItems:"center",
        //backgroundColor:"skyblue",
        // width:"100%"
    },
    text:{
        //fontFamily:"DancingScript-Bold",
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold",
        marginTop:20,
        color:"white"
    },
    input:{
        backgroundColor:"white",
        width:"80%",
        padding:15,
        //margin:30,
        marginTop:40,
        marginLeft:30,
        borderRadius:10,
    },
    input2:{
        backgroundColor:"white",
        width:"80%",
        padding:15,
        // margin:30,
        marginTop:20,
        marginLeft:30,
        borderRadius:10
    },
    button:{
        backgroundColor:'white',
        width:150,
        padding:10,
        marginTop:15,
        borderRadius:10
    },
    btnText:{
        fontSize : 20,
        textAlign:"center",
        fontWeight:"bold",

    },
    btnContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        width:"80%",
        marginLeft:30,
        alignItems:"center",
        justifyContent:"center"
    },
  
    screen:{
        // height:200,
        // width:200,
        marginBottom:10
    },
    text2:{
        marginTop:90,
        flexDirection:"row",
        fontSize:17,
        justifyContent:"space-between"
    },
    text1:{
        fontWeight:"bold",
        fontSize:17,
      
    } ,
     backimg:{
        backgroundColor: 'blue',
         flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    }
  
})

export default Login;