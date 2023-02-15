import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, View, Dimensions, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import { SignUpForm } from "./SignupForm";

const { width, height } = Dimensions.get("window");

const AppForm = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignContent: "center",
			}}
		>
			{/* <StatusBar /> */}
			<View
				style={{
					alignSelf: "center",
					height: height * .8,
					width: width - 40,
					borderRadius: 17,
					backgroundColor: "#FFFFFF",
					alignSelf: "center",
					justifyContent: "center",
					borderWidth: 1.5,
					borderColor: "rgba(73, 137, 242, 0.48)",
				}}
			>
				<View
					style={{
						marginTop: 10,
						alignContent: "center",
						marginBottom: 20,
						alignSelf: "center",
					}}
				>
					<Text
						style={{
							fontSize: 40,
							fontWeight: "600",
							color: "rgba(54, 59, 232, 1)",
						}}
					>
						Welcome
					</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={{ fontFamily: "Poppins" }}>Let's create your</Text>
						<Text
							style={{
								textDecorationLine: "underline",
								color: "#363be8",
								fontFamily: "Poppins",
								left: 3,
							}}
						>
							account
						</Text>
					</View>
				</View>

				<ScrollView>
                    <SignUpForm/>
					{/* <SignupForm /> */}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});
export default AppForm;
