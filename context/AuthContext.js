import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions, useNavigation } from "@react-navigation/native";
import React, {createContext, useEffect, useMemo, useState} from "react";
import {Login} from "../Components/Login";

export const AuthContext = createContext();


export const AuthProvider =({children})=>{

    const [isLoading, setIsLoading] = useState(false)
    const  [userToken, setUserToken]= useState(null)
   const [userInfo, setUserInfo] = useState(null)


    const login = async (email,password) => {
    const navigation = useNavigation()
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken]= useState(null)
    const [userInfos, setUserInfo] = useState(null)

    await axios.post("https://no-vex-abeg.onrender.com/api/signin", {
       email, password
   }).then((res)=>{
       console.log(res)
       if (res.status === 200) {
           // also store the users values as an object and pass it round
           console.log(res.data);
           let userInfo = res.data.user
           setUserInfo(userInfo)
           let token = res.data.token
           setUserToken(token)

           try{
               // stringify the user object
               AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
               // get the user token
               AsyncStorage.setItem("userToken",token)
               console.log(userInfo)
               console.log(token)
           navigation.dispatch(StackActions.replace("Tab"));
           }catch(e){
               console.log(`Async Storage error: ${e}`)
           }


           // let useremail = values.email
           // try{
           // AsyncStorage.setItem("email", useremail)
           // // console.log(useremail)
           // navigation.dispatch(StackActions.replace("Tab"));
           // }catch(e){
           //  console.log(`The error is ${e}`)
           // }
       }else{
        console.log("Attempt to Login failed")
       }
   }).catch((e)=>{
       console.log(e)
   }
   
   )
   
};


   

   const logout = async()=>{
    setIsLoading(true)
    setUserToken(null)
    try{
  await  AsyncStorage.removeItem("userToken")
   await AsyncStorage.removeItem("userInfo")
}catch(e){
    console.log(`${e}`)
}
    setIsLoading(false)
   }



   const isLoggedIn = async ()=>{
    try{
        setIsLoading(true)
        let userToken = await AsyncStorage.getItem("userToken")
        let userInfo = await AsyncStorage.getItem("userInfo")
        userInfo = JSON.parse(userInfo)
        if(userInfo){
            setUserToken(userToken)
            setUserInfo(userInfo)
        }
        setIsLoading(false)
    }catch(e){
        console.log(`isLogged in error: ${e}`)
    }
   }

   useEffect(()=>{
    isLoggedIn()
   }, [])



    return(
        <AuthContext.Provider value={{login, logout, isLoading, userToken, userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}