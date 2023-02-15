import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
const { width } = Dimensions.get("screen");
const CARD_WIDTH = width - 30;
export const Home = () => {
	return (
	
			<SafeAreaView>
				<Text
					style={{ fontSize: 30, fontWeight: "700", color: COLORS.primary }}
				>
					Today
				</Text>
				<Image
					style={{
						width: CARD_WIDTH,
						height: 328,
						borderRadius: 25,
						marginTop: 20,
					}}
					source={require("../assets/bg.jpeg")}
				/>
				<Text
					style={{
						width: 138,
						height: 49.62,
						fontSize: 22,
						fontWeight: "600",
						color: COLORS.white,
					}}
				>
					App to free your mind
				</Text>
			</SafeAreaView>
	);
};
const styles = StyleSheet.create({});