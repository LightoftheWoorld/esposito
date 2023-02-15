import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
const { width } = Dimensions.get("window");
export const FormSubmitBtn = ({ title, onPress, submitting, disabled }) => {
	const backgroundColor = submitting ? "#FFF" : "#0D13E3";
	return (
		<TouchableOpacity
		disabled={disabled}
			activeOpacity={0.7}
			onPress={submitting ? null : onPress}
			style={[styles.container, { backgroundColor }]}
		>
			<Text
				style={{
					alignSelf: "center",
					color: "#FFF",
					fontWeight: "500",
					fontSize: 16,
					fontFamily:"Poppins3"
				}}
			>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		width: width - 130,
		height: 50,
		alignSelf: "center",
		borderRadius: 10,
		justifyContent: "center",
		marginTop: 10,
	},
});
