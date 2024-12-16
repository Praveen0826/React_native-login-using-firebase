import { useState } from "react"
import {View,Text,TextInput, Button, StyleSheet} from "react-native"
import {signInWithEmailAndPassword} from 'firebase/auth'
import auth from '../Services/Firebase'




function Loginscreen() {
    

const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');
const[error,Seterror]=useState('');

function handleregister(){
    Seterror('')
    signInWithEmailAndPassword(auth,Email,Password)
    .then((usercredential)=>{
        const user=usercredential.user; 
        console.log(user);
        
     
    }).catch((error)=>{
        Seterror(error.message)
        
    })
    
    
}



  return (
    <View style={Styles.outerview}>
        <Text style={Styles.registername}>Log in</Text>

        <TextInput
         style={Styles.input} 
         placeholder="Email"
         onChangeText={setEmail}>
         </TextInput>

        <TextInput 
        style={Styles.input} 
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}>
        
        </TextInput>

        <Button title="Login" onPress={handleregister}></Button>
        <Text style={Styles.alert}>{error}</Text>
        <Text style={Styles.accounttext}>Don't have an account? Registerhere</Text>

       
        </View>
  )
}

const Styles=StyleSheet.create({
    outerview:{
        flex:1,
        justifyContent:"center"
    },
    registername:{
        textAlign:"center",
        fontSize:25,
        marginBottom:10
    },
    input:{
        borderWidth:1,
        borderColor:"gray", 
        marginVertical:10,
        paddingHorizontal:10       
    },
    accounttext:{
        marginTop:10
    },
    alert:{
        color:"red",
        marginTop:10
    }
})

export default Loginscreen