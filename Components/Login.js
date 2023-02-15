import React, {useState } from "react";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";


// export const Login = async (values) => {

// 	const navigation = useNavigation()
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [userToken, setUserToken]= useState(null)
// 	const [userInfos, setUserInfo] = useState(null)

//       await axios.post("https://no-vex-abeg.onrender.com/api/signin", {
// 			...values,
// 		}).then((res)=>{
// 			console.log(res)
// 			if (res.status === 200) {
// 				// also store the users values as an object and pass it round
// 				console.log(res.data);
// 				let userInfo = res.data.user
// 				setUserInfo(userInfo)
// 				let token = res.data.token
// 				setUserToken(token)

// 				try{
// 					// stringify the user object
// 					AsyncStorage.setItem("userInfo", JSON.stringify (userInfo))
// 					// get the user token
// 					AsyncStorage.setItem("userToken",token)
// 					console.log(userInfo)
// 					console.log(token)
// 				navigation.dispatch(StackActions.replace("Tab"));
// 				}catch(e){
// 					console.log(`Async Storage error: ${e}`)
// 				}
// 			}
// 		}).catch((e)=>{
// 			console.log(e)
// 		}
		
// 		)
		
// 	};




	export const Login = async (values) => {
		const navigation = useNavigation()
		const [isLoading, setIsLoading] = useState(false);
		const [userToken, setUserToken]= useState(null)
		const [userInfos, setUserInfo] = useState(null)

		await axios.post("https://no-vex-abeg.onrender.com/api/signin", {
		   ...values,
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
		   }
	   }).catch((e)=>{
		   console.log(e)
	   }
	   
	   )  
   };



