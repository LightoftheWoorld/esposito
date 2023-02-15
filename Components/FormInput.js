import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export const FormInput = (props) => {
	const { label, error, style, TextInputStyle } = props;
	return (
		<>
			<View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 20  }}>
				<Text style={style}>{label}</Text>
				{error ? (
					<Text style={{ fontSize: 11, color: "red", fontFamily:"Poppins"}}>{error}</Text>
				) : null}
			</View>
			<TextInput
				{...props}
				style={TextInputStyle}
				selectionColor={'#363BE8'}
				cursorColor={"#363be8"}
			/>
		</>
	);
};

const styles = StyleSheet.create({
    signupText: { fontSize: 15, fontFamily:"Poppins" },
    signupInput: {
        backgroundColor: "#C9D9F2",
        borderRadius: 5,
        height: 35,
        marginBottom: 10,
        paddingLeft: 5,
        fontSize: 15,
    }
});
