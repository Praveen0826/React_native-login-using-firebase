// Import the functions you need from the SDKs you need
import { initializeApp,getApps } from "firebase/app";
import {initializeAuth,getReactNativePersistence,getAuth} from 'firebase/auth'
import ReactNativeAsyncstorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGU6KGu6Wke6On-dNKdOWzphjRXhaezqo",
  authDomain: "react-native-auth-d6df8.firebaseapp.com",
  projectId: "react-native-auth-d6df8",
  storageBucket: "react-native-auth-d6df8.firebasestorage.app",
  messagingSenderId: "682991799318",
  appId: "1:682991799318:web:e6cf596b3f1ad8f9bc3937"
};
 let auth;
// Initialize Firebase
if (getApps().length==0) {
    const app = initializeApp(firebaseConfig);
    auth=initializeAuth(app,{
        persistence:getReactNativePersistence(ReactNativeAsyncstorage)
    }); 
}else{
    auth=getAuth();
}


export default auth;
