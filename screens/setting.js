import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import {
	Dimensions,
	StyleSheet,
	TouchableOpacity,
	View,
	Text,
	Image,
	TextInput,
	Button,
	ActivityIndicator,
} from "react-native";
import {
	TicketIcon,
	Notification,
	Person,
	Chat,
	Direction,
	Warning,
	ScanTicket,
	Icon,
} from "../constants/icons";
import { StackActions, useNavigation } from "@react-navigation/native";
import { SettingsButton } from "../Components/settingsButton";
import { ModalPopUp } from "../Components/Modal";
import { COLORS } from "../constants/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable } from "react-native";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormSubmitBtn } from "../Components/FormSubmitBtn";
import BottomSheet from "../Components/Bottomsheet";
const {  width, height } = Dimensions.get("screen");

export const Profile = () => {

		const [actionTriggered, setActionTriggered] = useState("");
	        const [isLoading, setIsLoading] = useState(false);
			const bottomSheetRef = useRef();
	  const pressHandler = useCallback(() => {
		bottomSheetRef.current.expand();
	  }, []);

	
		const [visible, setVisible] = useState(false);
          const [userInfo, setUserInfo] = useState(null)
          const [userToken, setUserToken] = useState(null)

  const  getData = async () => {
	try {
	  const value = await AsyncStorage.getItem('userInfo')
	  const userToken = await AsyncStorage.getItem("userToken")

	  if(value !== null && userToken !==null) {
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

	const navigation = useNavigation();


	const verifyPassword = async(values)=>{

		const email = userInfo?.email
	     const token = userToken
		 console.log(token)

		const config = {
			headers: { Authorization: `Bearer ${token}` }
		};
		const body={
			email:email,
			password:values.password
		}
		

		setIsLoading(true)
	   axios.post("https://code-6z3x.onrender.com/api/tickets/verifyPassword",body,config
		).then((res)=> {
			console.log(res);
			if (res.status === 200) {
				setVisible(false);
				setIsLoading(false);
				navigation.navigate("TicketScreen");
			}
		}).catch((e)=>{
			console.log(`${e}`)
		})


		// since i want to use the same functionality to dispatch the users, if the userrole is 1, it would navigate the user to
		// scantickets, else navigate the user to check tickets
	   }







	   const validationSchema = Yup.object({
		password: Yup.string()
		.trim()
		.min(8, "Password not long enough!")
		.required("Password required!"),
	});


	// here, i'm getting the whole userinfo to get the values
	return (

		<View style={styles.container}>
			<View
				style={{
					width: width - 20,
				}}
			>
				<View style={{ flexDirection: "row", marginLeft: 10 }}>
					<View style={styles.itemcontainer}>
						<Text style={{ fontWeight: "600", fontSize: 30, color: COLORS.white, fontFamily:"Poppins", color:"#ececec" }}>
						{userInfo?.firstname.charAt(0).toUpperCase()}{userInfo?.lastname.charAt(0).toUpperCase()}
						</Text>
					</View>
					<View style={{ paddingBottom: 10, paddingLeft: 10 }}>
						<Text style={{ fontSize: 24, fontWeight: "600", fontFamily:"Poppins", color:"#363636" }}>{userInfo?.firstname} {userInfo?.lastname}</Text>
						<Text style={styles.email}>{userInfo?.email}</Text>
					</View>
				</View>
				<View>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate("AccountScreen")}
					>
						<SettingsButton
							iconLeft={Direction}
							icon={Person}
							ButtonName={"Account"}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => navigation.navigate("NotificationScreen")}
					>
						<SettingsButton
							iconLeft={Direction}
							icon={Notification}
							ButtonName={"Notification"}
						/>
					</TouchableOpacity>

					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() =>
							
							{
							setVisible(true);
							setActionTriggered("Action_1");
						}
					
					}
					>
						<SettingsButton icon={TicketIcon} ButtonName={"Ticket"} />
					</TouchableOpacity>
					
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={() => {
							setVisible(true);
							setActionTriggered("Action_2");
						}}
					>
						<SettingsButton icon={Chat} ButtonName={"Feedback"} />
					</TouchableOpacity>
                     

					 
					 
					 { userInfo?.role === 0?
					 // this user role is meant to be 1
					 (
						<>
					<View style={{width:55, height:55, backgroundColor:"#004fc7", borderRadius:50, position:"absolute", bottom:-200, right:15}}>
                     <Pressable
					onPress={()=>pressHandler()}
					>
                     <Text style={{bottom:7, fontFamily:"Poppins", alignSelf:"center", fontSize:48, color:"#fff"}}>+</Text>
					</Pressable>
					</View>
					</>
	)
					:

			userInfo?.role === 2?
			(
                  <>
				<TouchableOpacity
				activeOpacity={0.7}
				onPress={() => {
					navigation.navigate("ScanTicketScreen")
					}}
			>
				
				 <SettingsButton
					icon={ScanTicket}
					ButtonName={"Scan QR Code"}
				/>
			</TouchableOpacity>
			</>
			): null
		
}


                 <BottomSheet
						ref={bottomSheetRef}
						activeHeight={height * 0.5}
						backgroundColor={"#fff"}
						// backDropColor={"black"}
					>
						<View
							style={{
								width: width,
								height: 200,
								marginLeft: 20,
								marginTop: 20,
							}}
						>
							<View>
								<Text
									style={{
										fontWeight: "600",
										fontFamily: "Poppins2",
										fontSize: 30,
									}}
								>
									Create
								</Text>

								<View style={{ paddingVertical: 10 }}>
									<TouchableOpacity
										onPress={() => {
											setVisible(false);
											navigation.navigate("UploadPostScreen");
										}}
									>
										<View style={{ flexDirection: "row" }}>
											<Icon name={"newspaper-outline"} size={20} />
											<Text style={styles.text}>New Post</Text>
										</View>
									</TouchableOpacity>
									<TouchableOpacity
										onPress={() => {
											setVisible(false);
											navigation.navigate("UploadEventScreen");
										}}
									>
										<View style={{ flexDirection: "row", top: 15 }}>
											<Icon name={"calendar-outline"} size={20} />
											<Text style={styles.text}>New Event</Text>
										</View>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</BottomSheet>

                      


					<ModalPopUp visible={visible}>
						<View 
						// style={{ alignItems: "center" }}
						>
							<View style={styles.header}>
								<TouchableOpacity onPress={() =>{ setVisible(false); setIsLoading(false)}}>
									<Image
										source={require("../assets/x.png")}
										style={{ height: 20, width: 20 }}
									/>
								</TouchableOpacity>
							</View>
						</View>

						{actionTriggered === "Action_1" ?
						(
                             <Formik
							 initialValues={{password:""}}
							 validationSchema={validationSchema}
							onSubmit={verifyPassword }
							 >
								{({
                                 values,
								 errors,
								 isSubmitting,
								 handleChange,
								 handleBlur,
								 handleSubmit,
								 touched
								})=>{
                               const {password} = values
									return(
										<>
								<View
									style={{
										alignItems: "center",
									}}
								>
									<Text
										style={{
											fontSize: 26,
											fontWeight: "400",
											color: "rgba(39, 46, 57, 1)",
											fontFamily:"Poppins3"
										}}
									>
										Hey {`${userInfo?.lastname}`}
									</Text>
									<Text
										style={{
											width:"90%",
											fontSize: 12,
											fontWeight: "300",
											textAlign: "center",
											color: "rgba(112.62, 112.62, 112.62, 1)",
											fontFamily:"Poppins"
										}}
									>
								  Please enter your secured password 
									</Text>
								</View>
								{errors.password && touched.password && 
		<Text style={{ color: 'red', fontFamily:"Poppins", fontSize:10, top:3, alignSelf:"center", left:60 }}>
			{errors.password}
			</Text>
			}
                                 <TextInput
	                        placeholder="*********"
							onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								value={password}
								secureTextEntry
								autoCapitalize="none"
								maxLength={32}
								selectionColor='#363BE8'
								cursorColor='#363be8'
	                        style={styles.password}
/>
							   {/* <TouchableOpacity activeOpacity={0.7}
								
								onPress={handleSubmit}
								>
									<View
										style={{
											alignSelf: "center",
											height: 30,
											width: 80,
											backgroundColor: "rgba(0, 79.41, 198.53, 1)",
											borderRadius: 5,
											justifyContent: "center",
										}}
									>
										<Text
											style={{
												fontSize: 16,
												fontWeight: "500",
												textAlign: "center",
												color: "white",
												fontFamily:"Poppins3"
											}}

										>
										Verify
										</Text>
									</View>
								</TouchableOpacity>	 */}

								{isLoading ? (
								<View>
									<ActivityIndicator size="large" color="#0000ff" />
								</View>
							) : (
								<FormSubmitBtn
									Submitting={isSubmitting}
									onPress={handleSubmit}
									title={"verify"}
								/>
							)}	


								</>
									)
								}
							}
			</Formik>
						)
			:
			null}
						
						{actionTriggered === "Action_2" ? (
							<>
								<View
									style={{
										alignItems: "center",
									}}
								>
									<Text
										style={{
											fontSize: 26,
											fontWeight: "400",
											color: "rgba(39, 46, 57, 1)",
											fontFamily:"Poppins3"
										}}
									>
										Feedback
									</Text>
									<Text
										style={{
											// width: width / 3,
											width:"90%",
											fontSize: 12,
											fontWeight: "300",
											textAlign: "center",
											color: "rgba(112.62, 112.62, 112.62, 1)",
											fontFamily:"Poppins"
										}}
									>
										Let us know what we can do to improve your experience in
										this app
									</Text>
								</View>
								<TextInput
									placeholder="Your message here"
									multiline={true}
									style={{
										borderColor: "gray",
										width: "100%",
										borderWidth: 1,
										borderRadius: 10,
										padding: 10,
										height: 95,
										marginBottom: 15,
										fontFamily:"Poppins",
										top:3
									}}
									selectionColor={"blue"}
								/>
								<TouchableOpacity activeOpacity={0.7}>
									<View
										style={{
											alignSelf: "center",
											height: 30,
											width: 80,
											backgroundColor: "rgba(0, 79.41, 198.53, 1)",
											borderRadius: 5,
											justifyContent: "center",
										}}
									>
										<Text
											style={{
												fontSize: 16,
												fontWeight: "500",
												textAlign: "center",
												color: "white",
												fontFamily:"Poppins3"
											}}

										>
											Post
										</Text>
									</View>
								</TouchableOpacity>
							</>
						) : null}

{/* 
						{actionTriggered === "Action_3" ?
                             <Formik
							 initialValues={{password:""}}
							 validationSchema={validationSchema}
							//  onSubmit={(values) => {
							// 	console.log(values);
							// }}
							onSubmit={verifyPassword}
							 >
								{({
                                 values,
								 errors,
								 isSubmitting,
								 handleChange,
								 handleBlur,
								 handleSubmit,
								 touched
								})=>{
                               const {password} = values
									return(
										<>
								<View
									style={{
										alignItems: "center",
									}}
								>
									<Text
										style={{
											fontSize: 26,
											fontWeight: "400",
											color: "rgba(39, 46, 57, 1)",
											fontFamily:"Poppins3"
										}}
									>
										Hey {`${userInfo?.lastname}`}
									</Text>
									<Text
										style={{
											width:"90%",
											fontSize: 12,
											fontWeight: "300",
											textAlign: "center",
											color: "rgba(112.62, 112.62, 112.62, 1)",
											fontFamily:"Poppins"
										}}
									>
								  Please enter your secured password 
									</Text>
								</View>
								{errors.password && touched.password && 
		<Text style={{ color: 'red', fontFamily:"Poppins", fontSize:10, top:3, alignSelf:"center", left:60 }}>
			{errors.password}
			</Text>
			}
                                 <TextInput
	                        placeholder="*********"
							onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								value={password}
								secureTextEntry
								autoCapitalize="none"
								maxLength={32}
								selectionColor='#363BE8'
								cursorColor='#363be8'
	                        style={styles.password}
/> */}
							   {/* {/* <TouchableOpacity activeOpacity={0.7}
								
								onPress={handleSubmit}
								
								>
									<View
										style={{
											alignSelf: "center",
											height: 30,
											width: 80,
											backgroundColor: "rgba(0, 79.41, 198.53, 1)",
											borderRadius: 5,
											justifyContent: "center",
										}}
									>
										<Text
											style={{
												fontSize: 16,
												fontWeight: "500",
												textAlign: "center",
												color: "white",
												fontFamily:"Poppins3"
											}}

										>
										Verify
										</Text>
									</View>
								</TouchableOpacity>	 */}

								{/* {isLoading ? (
								<View>
									<ActivityIndicator size="large" color="#0000ff" />
								</View>
							) : (
								<FormSubmitBtn
									Submitting={isSubmitting}
									onPress={handleSubmit}
									title={"verify"}
								/>
							)}	 */}


								{/* </>
									)
								}
							}
			</Formik>
			:
			null} */}



					</ModalPopUp>	
				</View>
			</View>
		</View>


    
	);
};




const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		flex: 1,
		paddingTop: 80,
	},
	itemcontainer: {
		backgroundColor: "#004FC7",
		height: 59,
		width: 59,
		borderRadius: 59,
		alignItems: "center",
		justifyContent: "center",
	},
	email: { fontWeight: "500", color: "#717171", fontSize: 12, opacity: 0.5, fontFamily:"Roboto" },
	modalBackGround: {
		flex: 1,
		backgroundColor: "rgba(0,0,0,0.5)",
		justifyContent: "center",
		alignItems: "center",
	},
	modalContainer: {
		width: "80%",
		backgroundColor: COLORS.white,
		paddingHorizontal: 20,
		paddingVertical: 30,
		borderRadius: 20,
		elevation: 20,
	},
	header: {
		width: "100%",
		height: 20,
		alignItems: "flex-end",
		justifyContent: "center",
	},
	text:{fontFamily:"Poppins", fontSize: 20, fontWeight:"300", lineHeight:30, alignItems:"center", color:"#363636", left:5, top:-2},
	password:{
		borderColor: "gray",
		width: "100%",
		 borderWidth: 1,
		borderRadius: 10,
	  padding: 10,
	 height: 60,
	marginBottom: 15,
	fontFamily:"Poppins",
   top:3
	   }
});
