import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const initCodes = [];
export default function OTP({
	containerStyle,
	otpStyles,
	codeCount = 5,
	onTyping,
	onFinish,
	...props
}) {
	const inputCodeRef = useRef(new Array());
	const [codes, setCodes] = useState(initCodes);
	useEffect(() => {
		const codes = [];
		for (let i = 0; i < codeCount; i++) {
			codes.push("");
		}
		setCodes(codes);
	}, []);

	useEffect(() => {
		onTyping && onTyping(getCodes());
		const isTypeFinish = codes.every(function (i) {
			return i !== "";
		});
		if (isTypeFinish) {
			onFinish && onFinish(getCodes());
		}
	}, [codes]);

	const getCodes = () => {
		let codeString = "";
		codes.forEach((code) => {
			codeString += code;
		});
		return {"token" : codeString};
	};

	const onChangeCode = (code, index) => {
		const typedCode = code.slice(-1);
		const currentCodes = [...codes];
		currentCodes[index] = typedCode;
		setCodes(currentCodes);
	};
	const onKeyPress = (event, index) => {
		const key = event.nativeEvent.key;
		let destIndex = index;
		if (key === "Backspace") {
			destIndex = index > 0 ? index - 1 : 0;
		} else {
			destIndex = index < codeCount - 1 ? index + 1 : codeCount - 1;
		}
		inputCodeRef.current[destIndex].focus();
	};
	return (
		<View style={[styles.form, containerStyle]}>
			{codes.map((code, index) => {
				return (
					<TextInput
						maxLength={1}
						cursorColor="red"
						selectionColor={"blue"}
						key={`${index}`}
						ref={(element) => inputCodeRef.current.push(element)}
						style={[
							styles.input,
							otpStyles,
							{ width: width / (codeCount + 3), height: height / 14 },
						]}
						onChangeText={(text) => onChangeCode(text, index)}
						onKeyPress={(event) => onKeyPress(event, index)}
						value={code}
						{...props}
					/>
				);
			})}
		</View>
	);
}

const styles = StyleSheet.create({
	form: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	input: {
		marginHorizontal: 4,
		fontSize: 32,
		textAlign: "center",
		backgroundColor: "#fff",
		borderBottomWidth: 1.5,
		borderBottomColor: "#363BE8",
		fontFamily:"Poppins",
		color:"#363be8"
	},
});
