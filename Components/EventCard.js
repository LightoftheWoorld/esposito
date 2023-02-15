import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../constants/theme";
const { width, height } = Dimensions.get("screen");
const CARD_WIDTH = width - 20;
const CARD_HEIGHT = width / 1.2;
export const EventCard = ({
	EventDate,
	EventTitle,
	EventLocation,
	EventTime,
	EventImageUri,
	onPressAction
}) => {
	return (
		<View>
			<Text
				style={{
					fontSize: 22,
					fontWeight: "700",
					color: COLORS.black,
					paddingTop: 10,
				}}
			>
				{EventDate}
			</Text>
			<TouchableOpacity activeOpacity={.8} onPress={onPressAction}>
				<View
					style={{
						width: CARD_WIDTH,
						height: CARD_HEIGHT,
						borderRadius: 25,
						backgroundColor: COLORS.black,
						marginTop: 10,
						marginRight: 10,
						alignSelf: "center",
					}}
				>
					<Image
						source={EventImageUri}
						style={{ width: CARD_WIDTH, height: CARD_HEIGHT, borderRadius: 25 }}
					/>
					<View
						style={{
							marginLeft: 10,
							position: "absolute",
							top: CARD_HEIGHT / 1.2,
						}}
					>
						<Text
							style={{
								fontSize: CARD_WIDTH / 15,
								fontWeight: "700",
								color: COLORS.white,
							}}
						>
							{EventTitle}
						</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ fontSize: 10, fontWeight: "600", color: COLORS.white }}>
								{EventLocation}
							</Text>
							<Text
								style={{
									fontSize: 10,
									fontWeight: "600",
									color: COLORS.white,
									marginLeft: 20,
								}}
							>
								{EventTime}
							</Text>
						</View>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({});
