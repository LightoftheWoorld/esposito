import { View, Text, Dimensions, Switch } from "react-native";
import React from "react";
import { Back } from "../constants/icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../constants/theme";
const { width } = Dimensions.get("screen");
export const Notification = () => {
	const navigation = useNavigation();
	const [isEnabled, setIsEnabled] = React.useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<View style={{ marginLeft: 30, marginRight: 30, top: 40 }}>
			<View style={{ flexDirection: "row", paddingTop: 20, justifyContent: "space-between" }}>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => navigation.goBack()}
				>
					<Back size={25} style={{}} />
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 24,
						fontWeight: "600",
						textAlign: "center",
						color: COLORS.black,
                        marginRight: width / 6 ,
						paddingBottom: 20,
						fontFamily:"Poppins3",
						// alignContent:"y"
					}}
				>
					Notifications
				</Text>
			</View>
			<Text
				style={{
					fontSize: 17,
					fontWeight: "600",
					paddingBottom: 5,
					color: COLORS.black,
					fontFamily:"Poppins2"
				}}
			>
				Notification Settings
			</Text>
			<Text
				style={{
					width: 315,
					fontSize: 12,
					paddingBottom: 5,
					fontWeight: "300",
					color: COLORS.black,
					fontFamily:"Poppins"
				}}
			>
				We may still send you important notifications about your account outside
				of your notification settings
			</Text>
			<Text
				style={{
					fontSize: 10,
					paddingBottom: 8,
					color: COLORS.black,
					fontWeight: "500",
					fontFamily:"Poppins"
				}}
			>
				Interactions
			</Text>
			<View
				style={{
					width: width - 60,
					height: 48,
					backgroundColor: COLORS.white,
					borderRadius: 5,
					alignItems: "center",
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Text
					style={{
						fontSize: 12,
						fontWeight: "600",
						color: COLORS.black,
						marginLeft: 5,
						fontFamily:"Poppins"
					}}
				>
					Notifications
				</Text>
				<Switch
					trackColor={{ false: "#767577", true: "#81b0ff" }}
					thumbColor={isEnabled ? COLORS.primary : "#f4f3f4"}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={isEnabled}
				/>
			</View>
		</View>
	);
};
