import { useState } from "react"
import {View,Text,TextInput, Button, StyleSheet} from "react-native"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from '../Services/Firebase'




function Registerscreen() {
    

const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');
const[error,Seterror]=useState('');

function handleregister(){
    createUserWithEmailAndPassword(auth,Email,Password)
    .then((usercredential)=>{
        const user=usercredential.user; 
        console.log(user);
        
     
    }).catch((error)=>{
        Seterror(error.message)
        
    })
    
    
}



  return (
    <View style={Styles.outerview}>
        <Text style={Styles.registername}>Register</Text>

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

        <Button title="Register" onPress={handleregister}></Button>
        <Text style={Styles.alert}>{error}</Text>
        <Text style={Styles.accounttext}>Aldready have an account? Signin</Text>

       
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

export default Registerscreen