import { StyleSheet, Text, View } from "react-native";
import React from "react";

export const SettingsButton = ({ icon, ButtonName, iconLeft }) => {
	return (
		<>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<View style={{ flexDirection: "row", padding: 20 }}>
					{icon}
					<Text style={{ marginLeft: 10, fontFamily:"Poppins", fontWeight:"400", fontSize:14, color:"#717171"}}>{ButtonName}</Text>
				</View>
				{iconLeft}
			</View>
			<View
				style={{
					borderBottomColor: "#d9d9d9",
					borderBottomWidth: StyleSheet.hairlineWidth,
				}}
			/>
		</>
	);
};

const styles = StyleSheet.create({});
