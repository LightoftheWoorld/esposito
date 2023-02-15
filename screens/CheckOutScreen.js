import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { WebView } from 'react-native-webview';
import { StackActions, useNavigation } from '@react-navigation/native';
import axios from 'axios';


const CheckOutScreen =  ({route}) => {
  return (
<CheckOutModal route={route}/>
  );
}


const CheckOutModal =(props)=>{
  const navigation= useNavigation()
  const {authorization_url} = props.route.params

  // const navigateBack = async()=>{
  //   const res = await axios.get("",{

  // }).then((res)=>{
  //      if(res ===)

  // })
  

   
    

return(
  <WebView 
  source={{ uri: authorization_url }}
  style={{ marginTop: 40 }}
  // onNavigationStateChange={}
/>
)

}
 

export default CheckOutScreen

const styles = StyleSheet.create({})