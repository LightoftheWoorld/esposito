// import { Dimensions, StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
// import React, { useCallback, useContext, useEffect } from 'react'
// import { useRef, useState} from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { useFonts } from 'expo-font';
// import { Icon } from '../constants/icons';
// import { StackActions, useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { AuthContext } from '../context/AuthContext';
// import client from '../api/client';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
// // import moment from 'moment/moment';
// const{width, height} = Dimensions.get("window")
// const COLORS = {
//   primary: "#004FC7", // blue
//   secondary: "#F6F6F6",   // gray

//   black: "#1E1F20",
//   white: "#FFFFFF",
//   events:"#2b3b67"
// }

const EventDetails = ({ route }) => {
	return (
		<>
			{/* <StatusBar backgroundColor={COLORS.events} statusBarStyle={COLORS.events}/> */}
			{/* <View style={{backgroundColor:"#2b3b67", flex:1}}> */}
			<EventAbout route={route} />
			{/* </View> */}
		</>
	);
};

import { useNavigation } from "@react-navigation/native";
// const EventAbout =(props)=>{
//     const {title, date, venue, time, image, ticketPrice, description} = props.route.params
// return(
//     <View style={{top:20}}>
//     <EventImage image ={image}/>
//     <EventBody title={title} date={date} venue={venue} time={time} ticketPrice={ticketPrice} description={description}/>
//     </View>
// )
// }

// const EventImage=(props)=>{
//     const [currentSlideIndex, setCurrentSlideIndex]= useState(0)
//     const onViewableItemsChanged = useRef((item)=>{
//       const index = item.viewableItems[0].index
//       setCurrentSlideIndex(index)
//       // const index = item.viewableItems
//       console.log(index)
//     })
//     const viewabilityConfig = useRef({
//       itemVisiblePercentThreshold:50,
//     })
// return(
//     <View>
//      <View style={{ top:20, height:300, width:300, backgroundColor:"transparent",borderRadius:10, alignSelf:"center"}}>
//           <FlatList
//           data={props.image}
//           horizontal
//           bounces={false}
//           onViewableItemsChanged={onViewableItemsChanged.current}
//           viewabilityConfig={viewabilityConfig.current}
//           showsHorizontalScrollIndicator={false}
//           pagingEnabled
//           scrollEventThrottle={35}
//           scrollEnabled
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item}, id)=>(
//             <View>
//             <TouchableOpacity
//             activeOpacity={1}
//             >
//                 <Image
//                     style={{
//                       height:300, width:300,  alignSelf:"center", resizeMode:"contain", borderRadius:10
//                     }}
//                     key={id}
//                     source={{uri:item}}
//                     />
//                     </TouchableOpacity>
//                     </View>

//     )}
//   />
//   </View>

//   <View style={styles.pagination}>
//    {props.image.map((_, index) => {
//       return (
//          <View
//          key={index}
//          style={[
//            styles.dot,
//            currentSlideIndex == index && {
//              backgroundColor: "#000",
//              width: 7,
//              height:7,
//              borderRadius:10,
//            }
//          ]}
//        />
//        )
//       })}
//       </View>
//     </View>
//     )

//   }

// const EventBody=(props)=>{

//   const num = props.ticketPrice/100
//   const formattedNumber = num.toLocaleString("en-NG", { style: "currency", currency: "NGN" });

//   const [userInfo, setUserInfo] = useState(null)
//   const [userToken, setUserToken] = useState(null)
//   const navigation= useNavigation()

//   //run the async to get email and also get title being passed as a prop

//   const  getData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('userInfo')
//       const userToken = await AsyncStorage.getItem(`userToken`)
//       if(value !== null) {
//         console.log(userToken)
//       setUserInfo(JSON.parse(value))
//       setUserToken(userToken)
//       }
//     } catch(e) {
//       console.log(`${e}`)
//     }
//     }
//      useEffect(()=>{
//     getData()
//     },[])

//     const pay = async()=>{
//           const token = userToken
//           const email = userInfo?.email
//           const title = props.title
//           console.log(title)

//  const config = {
// 			headers: { Authorization: `Bearer ${token}` }
// 		};

//         const body={
//           email:email,
//           title:title
//         }

//       axios.post("https://code-6z3x.onrender.com/api/pay/payForTicket",body,config)
//         .then((res)=>{
//   console.log(res)

//   if(res.status === 200){
//     navigation.dispatch(
//               StackActions.replace("CheckOutScreen"
//               , {
//              authorization_url: res.data.authorization_url
//               }
//               )
//               );

//   }
// }).catch((e)=>{
//   console.log(`The error is: ${e}`)
// })

//     }

// return(
//     <>
//     <View style={{height:335, width:width*0.83, borderRadius:30, backgroundColor:"#fff", top:35, alignSelf:"center"}}>

// <View style={{margin:13, left:10, marginVertical:20}}>
// <Text style={{color:"#1b5bff", fontFamily:"Poppins2", fontSize:10, fontWeight:"300", position:"absolute", textTransform:"uppercase"}}>{props.date}</Text>
// <Text style={{fontWeight:"600", fontSize:23, lineHeight:28, color:"#000", fontFamily:"Poppins2", position:"absolute", top:20}}>{props.title}</Text>

// <View style={{bottom:-46, left:5}}>
//     <View>
//    <Icon
//    name="time-outline"
//    size={16}
//    style={{
//            color: "#000",
//            top:2,
//            left:-3
//            }}
//        />
//    <Text style={{color:"#000", fontFamily:"Poppins2", fontSize:14,
//    position:"absolute",
//    left:15
//    }}>{props.time} {"|"}</Text>
//    </View>

//    <View style={{flexDirection:"row", justifyContent:"space-around", bottom:15, left:-25}}>
//    <Icon
//    name="location-outline"
//    size={16}
//    style={{
//            color: "#000",
//            left:-20
//            }}
//        />
//    <Text style={{color:"#000", fontFamily:"Poppins2", fontSize:14, textTransform:"uppercase", position:"absolute",
//    top:-3
//    }}>{props.venue}</Text>
//    </View>

//    </View>

// <Text style={{fontFamily:"Poppins2", fontWeight:"400",position:"absolute", left:2, bottom:-265, fontSize:18, lineHeight:22}}>
//   {/* {props.ticketPrice} */}
// {formattedNumber}
//   </Text>

// <View style={{width:width*0.75, position:"absolute"}}>
// <Text style={{fontSize:10, fontFamily:"Poppins", fontWeight:"300", color:"#999999", position:"absolute", top:80, lineHeight:12.5}}>{props.description}</Text>
// </View>

// </View>

// <View style={{width:118, height:37, borderRadius:10, backgroundColor:"#004fc7",alignSelf:"center", position:"absolute", bottom:10, right:20}}>
//     <Pressable
//     activeOpacity={0.7}
//     // onPress={()=>pay()}
//     onPress={()=>pay()}
//  >
//     <Text style={{color:"#fff", fontSize:14, fontWeight:"600", lineHeight:21, fontFamily:"Poppins2", alignSelf:"center", position:"absolute", padding:8}}>Buy Now</Text>
//     </Pressable>
// </View>

//     </View>

//     </>
// )

// }

import * as React from "react";
import {
	StatusBar,
	FlatList,
	Image,
	Animated,
	Text,
	View,
	Dimensions,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { Icon, Location, Time } from "../constants/icons";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
const { width, height } = Dimensions.get("screen");

const imageW = width * 0.9;
const imageH = imageW * 1;

const EventAbout = (props) => {
	const [userInfo, setUserInfo] = useState(null);
	const [userToken, setUserToken] = useState(null);
	const navigation = useNavigation();

	//run the async to get email and also get title being passed as a prop

	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("userInfo");
			const userToken = await AsyncStorage.getItem(`userToken`);
			if (value !== null && userToken !== null) {
				console.log(userToken);
				setUserInfo(JSON.parse(value));
				setUserToken(userToken);
			}
		} catch (e) {
			console.log(`${e}`);
		}
	};
	React.useEffect(() => {
		getData();
	}, []);

	const pay = async () => {
		const token = userToken;
		const email = userInfo?.email;
		const title = props.title;
		console.log(title);

		const config = {
			headers: { Authorization: `Bearer ${token}` },
		};

		const body = {
			email: email,
			title: title,
		};

		axios
			.post("https://code-6z3x.onrender.com/api/pay/payForTicket", body, config)
			.then((res) => {
				console.log(res);

				if (res.status === 200) {
					navigation.dispatch(
						StackActions.replace("CheckOutScreen", {
							authorization_url: res.data.authorization_url,
						})
					);
				}
			})
			.catch((e) => {
				console.log(`The error is: ${e}`);
			});
	};

	const { title, date, venue, time, image, ticketPrice, description } =
		props.route.params;
	const num = ticketPrice / 100;
	const formattedNumber = num.toLocaleString("en-NG", {
		style: "currency",
		currency: "NGN",
	});

	const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
	const scrollX = React.useRef(new Animated.Value(0)).current;

	const Indicator = ({ scrollx }) => {
		return (
			<View style={{ flexDirection: "row", alignSelf: "center" }}>
				{image.map((_, i) => {
					const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

					const scale = scrollx.interpolate({
						inputRange,
						outputRange: [0.6, 0.9, 0.6],
						extrapolate: "clamp",
					});
					return (
						<Animated.View
							key={`indicator-${i}`}
							style={{
								height: 10,
								width: 10,
								borderRadius: 5,
								backgroundColor: "#fff",
								margin: 5,
								transform: [
									{
										scale,
									},
								],
							}}
						/>
					);
				})}
			</View>
		);
	};

	return (
		<View>
			<StatusBar hidden />
			<View style={StyleSheet.absoluteFillObject}>
				{image.map((image, index) => {
					const inputRange = [
						(index - 1) * width,
						index * width,
						(index + 1) * width,
					];
					const opacity = scrollX.interpolate({
						inputRange,
						outputRange: [0, 1, 0],
					});
					return (
						<Animated.Image
							source={{ uri: image }}
							key={`image-${index}`}
							style={[StyleSheet.absoluteFillObject, { opacity }]}
							blurRadius={50}
						/>
					);
				})}
			</View>
			<Animated.FlatList
				showsHorizontalScrollIndicator={false}
				data={image}
				onScroll={Animated.event(
					[{ nativeEvent: { contentOffset: { x: scrollX } } }],
					{ useNativeDriver: true }
				)}
				// keyExtractor={(_, index) => index.toString}
				keyExtractor={(item) => item.id}
				horizontal
				pagingEnabled
				renderItem={({ item }) => {
					return (
						<View
							style={{
								paddingTop: 20,
								width,
								alignItems: "center",
								shadowColor: "#000",
								shadowOpacity: 0.5,
								shadowOffset: { width: 0, height: 0 },
								shadowRadius: 20,
							}}
						>
							<Image
								source={{ uri: item }}
								style={{
									width: imageW,
									height: imageH,
									resizeMode: "cover",
									borderRadius: 50,
								}}
							/>
						</View>
					);
				}}
			/>
			<Indicator scrollx={scrollX} />
			<View
				style={{
					// marginTop: 20,
					height: 320,
					width: imageW,
					borderRadius: 30,
					backgroundColor: "#fff",
					// top: 35,
					marginBottom: 20,
					alignSelf: "center",
				}}
			>
				<View style={{ marginLeft: 10 }}>
					<Text
						style={{
							color: "#1b5bff",
							fontFamily: "Poppins2",
							fontSize: 10,
							fontWeight: "300",
							textTransform: "uppercase",
						}}
					>
						{date}
					</Text>
					<Text
						style={{
							fontWeight: "700",
							fontSize: 23,
							color: "#000",
							fontFamily: "Poppins2",
							textTransform: "uppercase",
						}}
					>
						{title}
					</Text>
					<Text
						style={{
							fontWeight: "600",
							color: "#000",
							fontFamily: "Poppins2",
							fontSize: 14,
							textTransform: "uppercase",
						}}
					>
						{Time}
						{time} {"|"}
						{Location}
						{venue}
					</Text>
					<Text
						style={{
							marginTop: 5,
							width: width * 0.8,
							fontSize: 11,
							fontFamily: "Poppins",
							fontWeight: "300",
							color: "#999999",
							lineHeight: 12.5,
						}}
					>
						{description}
					</Text>
					<View
						style={{
							position: "absolute",
							top: 275,
							flexDirection: "row",
						}}
					>
						<Text
							style={{
								paddingTop: 15,
								fontFamily: "Poppins2",
								fontWeight: "500",
								fontSize: 22,
								lineHeight: 22,
							}}
						>
							{formattedNumber}
						</Text>
						<TouchableOpacity activeOpacity={0.1} onPress={() => pay()}>
							<View
								style={{
									width: 100,
									height: 37,
									borderRadius: 10,
									backgroundColor: "#004fc7",
									alignSelf: "center",
									marginLeft: 80,
								}}
							>
								<Text
									style={{
										color: "#fff",
										fontSize: 14,
										fontWeight: "600",
										lineHeight: 21,
										fontFamily: "Poppins2",
										alignSelf: "center",
										position: "absolute",
										padding: 8,
									}}
								>
									Buy Now
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default EventDetails;

// const styles = StyleSheet.create({
//     dot:{borderRadius:10, height:7, width:7, backgroundColor:"gray", marginBottom:3, marginHorizontal:3, justifyContent:"center" },
//     pagination:{
//         bottom:-6,
//         left:(width*0.90)/2,
//         position:"absolute",
//         flexDirection:"row",
//         justifyContent:"center",
//       },

// })
