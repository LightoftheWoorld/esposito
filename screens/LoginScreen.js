import { StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";
const { width, height } = Dimensions.get("window");
import { SignInForm } from "../Components/SigninForm";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
const LoginScreen = () => {
	const navigation = useNavigation();
	return (

		<SafeAreaView style={styles.container}>
			{/* <StatusBar hidden /> */}
			<View
				style={{
					backgroundColor: "#363be8",
					height: 0.5 * height,
					borderBottomRightRadius: 100,
					alignItems: "center",
				}}
			>
				<Text
					style={{
						color: "#fff",
						fontSize: 35,
						fontWeight: "600",
						top: 70,
						fontFamily:"Poppins3"
					}}
				>
					Welcome
				</Text>
				<LottieView
					source={require("../assets/animations/information.json")}
					style={{
						position: "absolute",
						width: 250,
						height: 250,
						// resizeMode: "cover",
						top: 50,
						alignSelf: "center",
					}}
					loop={true}
					autoPlay
				/>
			</View>
			<View style={{ flex: 1 }}>
				<View
					style={{
						...StyleSheet.absoluteFillObject,
						backgroundColor: "#363be8",
						// backgroundColor: "linear-gradient(168deg, rgba(60.30, 171.77, 234.47, 1), rgba(63.88, 132.68, 235.88, 1) 23%, rgba(68, 132, 228, 1) 38%, rgba(54, 59, 232, 1) 80%)",
					}}
				/>
				<View
					style={{
						paddingTop: 12.5,
						flex: 1,
						backgroundColor: "white",
						borderTopLeftRadius: 100,
						alignItems: "center",
					}}
				>
					<SignInForm/>
					<Text
						style={{
							fontWeight: "400",
							fontSize: 15,
							color: "#717171",
							textAlign: "center",
							alignSelf: "center",
							marginTop: 20,
							marginBottom: 10,
							fontFamily:"Poppins"
						}}
					>
						or
					</Text>
					<View style={{flexDirection: "row"}}>
						<Text style={{ textAlign: "center", fontFamily:"Poppins" }}>Don't have an account?</Text>
						<Text
							style={{ color: "#363be8", fontWeight: "500", marginLeft: 5, fontFamily:"Poppins3"}}
							onPress={() => navigation.navigate("Sign-up")
						}
						>
							Sign up
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignContent: "center",
	},
});
