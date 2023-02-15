
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import axios from 'axios';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EVENTS } from '../data/eventData';
import client from '../api/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
const {width, height} = Dimensions.get("window")

const ScanTicketScreen = () =>{
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [userToken, setUserToken] = useState(null)
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);


  const  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('userInfo')
      const userToken = await AsyncStorage.getItem("userToken")
  
      if(value !== null && userToken !== null) {
      setUserInfo(JSON.parse(value))
      setUserToken(userToken)
      }
    } catch(e) {
      console.log(`${e}`)
    }
    }
  
     useEffect(()=>{
    getData()
    },[])


  const handleBarCodeScanned = async ({ type, data }) => {
    // setScanned(true);
    // get the data from the qr code, send a post request to the backend with that data to verify it, if it's succesful
    // show a small lottie view animation with sucess


       const token = userToken
       console.log(data)

       console.log(token)
         const config ={
         headers:{ Authorization: `Bearer ${token}`}
        }

    try {
      setScanned(true);
      const res = await client.post(`/tickets/scan`, {
        token: data,
        eventTitle: "The Test2"
      }, config);
  
      if (res.status === 200) {
        alert(`QR code has been successfully scanned`);
        setShowAnimation(true);
      }
      setScanned(false);
    } catch (e) {
      console.error(e);
    }
 









    // const getData = async()=>{
    //   try {
    //     const value = await AsyncStorage.getItem('userInfo')
    //     const userToken = await AsyncStorage.getItem("userToken")
    
    //     if(value !== null && userToken !== null) {
    //     setUserInfo(JSON.parse(value))
    //     setUserToken(userToken)
    //     }
  
    //     const token = userToken
    //     console.log(token)
    
    
    //     const config ={
    //      headers:{ Authorization: `Bearer ${token}`}
    //     }
    //     setScanned(true)

    //     await client.post(`/tickets/scan`,{
    //        token:data,
    //        eventTitle:"The Test2"
    //     }, config).then((res)=>{
    //       console.log(res)
    //       if(res.status === 200){
    //         alert(`QR code has been succesfully scanned`)
    //         setShowAnimation(true)
    //       } else{
    //         alert('QR not valid')
    //       }
    //       setScanned(false)
    //     })
  
    //   } catch(e) {
    //     console.log(`${e}`)
    //   }
    // }

    // useEffect(()=>{
    //   getData()
    // },[])

   
  
   

  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
    <View style={styles.container}>
      
      <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {/* {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>} */}
      
      {scanned &&
      <View style={{backgroundColor:"white", width:100, height:30, position:"absolute", alignItems:"center", bottom:height/10, left:width/3}}>
    <Text style={{fontFamily:"Poppins3", fontSize:18, color:"blue", position:"absolute", bottom:-2, alignSelf:"center",}} onPress={()=>setScanned(false)}>Re-scan</Text>
    </View>
    }
    </View>
    <View style={{height:347, width:300, backgroundColor:"transparent", position:"absolute", alignSelf:"center", bottom:height/6, borderColor:"white", borderRadius:20, borderWidth:3, alignContent:"center"}}/>

<View style={styles.animation}>
{showAnimation && (
  <LottieView
   source={require("../assets/animations/qr-scan.json")} 
   speed={0.5}
   autoPlay
   loop={false}
   style={{width:100, height:100, bottom:280, position:"absolute", right:10}}
  onAnimationFinish={()=> setShowAnimation(false)}
  />
)}

</View>
</>
  );
}
export default ScanTicketScreen


const styles = StyleSheet.create({
container:{
  flex:1,
  height:height,
  width:width,
  alignSelf:"center",
  top:30
}
})



