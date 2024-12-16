import React from 'react'
import{signOut,onAuthStateChanged} from 'firebase/auth'
import auth from '../Services/Firebase'
import{ View,Text,Button, StyleSheet} from 'react-native'

function Dashboard() {
function handlelogout(){
    signOut(auth)
    onAuthStateChanged(auth,(user)=>{
        if(user){
            console.log("Logged in");
            
        }
        else{
            console.log("logged out");
            
        }
    })

}

  return (
    <View>
        <Text style={Styles.head}>DashBoard</Text>
        <Button title='Logout' onPress={handlelogout} ></Button>
    </View>
   
  )
}

const Styles=StyleSheet.create({
  head:{
    marginBottom:10,
    fontSize:20
  }
})

export default Dashboard