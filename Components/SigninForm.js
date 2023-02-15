import { Formik } from "formik";
import React, { useContext, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { FormInput } from "./FormInput";
import { FormSubmitBtn } from "./FormSubmitBtn";
import * as Yup from "yup";
import { StackActions, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../api/client";
import axios from "axios";


const validationSchema = Yup.object({
	email: Yup.string()
		.trim()
		.matches(
			/^[\w-\.]+@+([\w-\.])+babcock+(\.)+edu(\.)ng$/gi,
			"School Email required"
			)
		.required("Email is required!"),
	password: Yup.string()
	.trim()
	.min(8, "Password not long enough!")
	.required("Password required!"),
});




export const SignInForm = () => {
	
	const [isLoading, setIsLoading] = useState(false);
	const [userToken, setUserToken]= useState(null)
	const [userInfo, setUserInfo] = useState(null)

	const userInfos = {
		email: "",
		password: "",
	};

	const navigation = useNavigation()

	const signIn = async (values) => {
		setIsLoading(true)
			 await client.post("/signin", {
					...values,
		}).then(async(res)=>{
			console.log(res)
			if (res.status === 200) {
				// also store the users values as an object and pass it round
				console.log(res.data);
				let userInfo = res.data.user
				console.log(userInfo)
	
				setUserInfo(userInfo)
				let token = res.data.token
				setUserToken(token)
	
				try{
					axios.defaults.headers.common.Authorization = `Bearer ${token}`
					// stringify the user object
					await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo))
					 
					// get the user token
					await AsyncStorage.setItem("userToken",token)
				}catch(e){
					console.log(`Async Storage error: ${e}`)
				}
				navigation.dispatch(StackActions.replace("Tab"));

			}
		}).catch((e)=>{
			console.log(e)
		}
		
		)
		
	}


	return (
		<View>
			<Formik
				initialValues={userInfos}
				validationSchema={validationSchema}
				 onSubmit={signIn}
			>
				{({
					values,
					errors,
					touched,
					isSubmitting,
					handleBlur,
					handleChange,
					handleSubmit,
				}) => {
					const { email, password } = values;
					return (
						<>
							<FormInput
								onChangeText={handleChange("email")}
								placeholder="email@student.babcock.edu.ng"
								onBlur={handleBlur("email")}
								error={touched.email && errors.email}
								value={email}
								autoCapitalize="none"
								label={"Email"}
								style={styles.text}
								TextInputStyle={styles.textInput}
								maxLength={32}
								selectionColor='#363BE8'
							/>
							<FormInput
								placeholder="*********"
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								error={touched.password && errors.password}
								value={password}
								secureTextEntry
								autoCapitalize="none"
								label={"Password"}
								style={styles.text}
								TextInputStyle={styles.textInput}
								maxLength={32}
								selectionColor='#363BE8'
								cursorColor='#363be8'
							/>
							{isLoading ? (
								<View>
									<ActivityIndicator size="large" color="#0000ff" />
								</View>
							) : (
								<FormSubmitBtn
									Submitting={isSubmitting}
									onPress={handleSubmit}
									title={"Log in"}
								/>
							)}
						</>
					);
				}}
			</Formik>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
		top: 30,
		backgroundColor: "#000",
		left: 20,
	},
	text: {
		fontWeight: "400",
		fontSize: 13,
		color: "#363be8",
		fontFamily:"Poppins"


	},
	textInput: {
		paddingTop: 15,
		borderColor: "000",
		borderBottomColor: "grey",
		borderBottomWidth: StyleSheet.hairlineWidth,
		height: 35,
		marginBottom: 10,
		paddingLeft: 5,
		fontSize: 13,
		fontFamily:"Poppins",
		width:240

	},
});
