import React from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Dimensions
} from "react-native";
const { width } = Dimensions.get("screen");

export const AccordionItem = () => {
	const [showContent, setShowContent] = React.useState(false);
	return (
		<View style={styles.container}>
			<TouchableOpacity
				activeOpacity={0.1}
				onPress={() => setShowContent(!showContent)}
			>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Personal Details</Text>
				</View>
			</TouchableOpacity>
			{showContent && (
				<View style={styles.body}>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View>
							<Text style={styles.text}>First Name</Text>
							<TextInput
								placeholder="Victor"
								style={[styles.textInput, { width: 155 }]}
								placeholderTextColor="#717171"
							/>
						</View>
						<View>
							<Text style={styles.text}>Last Name</Text>
							<TextInput
								editable={false}
								placeholder="Fagbohun"
								style={[styles.textInput, { width: 155 }]}
								placeholderTextColor="#717171"
							/>
						</View>
					</View>
					<View>
						<Text style={styles.text}>email</Text>
						<TextInput
							editable={false}
							placeholder="Fagbohun5865"
							style={styles.textInput}
							placeholderTextColor="#717171"
						/>
						<Text
							style={{
								alignSelf: "flex-end",
								bottom: 30,
								marginRight: 5,
								fontSize: 13,
								fontWeight: "500",
								color: "rgba(113, 113, 113, 0.5)",
								fontFamily:"Poppins"
							}}
						>
							@student.babcock.edu.ng
						</Text>
					</View>
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}
					>
						<View>
							<Text style={styles.text}>Course of study</Text>
							<TextInput
								editable={false}
								placeholder="Computer Science"
								style={[styles.textInput, { width: 255 }]}
								placeholderTextColor="#717171"
							/>
						</View>
						<View>
							<Text style={styles.text}>Gender</Text>
							<TextInput
								editable={false}
								placeholder="Male"
								style={[styles.textInput, { width: 75 }]}
								placeholderTextColor="#717171"
							/>
						</View>
					</View>
				</View>
			)}
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		alignSelf: "center",
		width: width - 30,
		padding: 10,
		borderRadius: 12,
		backgroundColor: "white",
		marginBottom: "2%",
		overflow: "hidden",
		borderColor: "rgba(113,113,113,0.2)",
		borderWidth: 1,
	},
	textInput: {
		fontSize: 15,
		borderColor: "rgba(113,113,113,0.2)",
		backgroundColor: "#D9D9D9",
		height: 40,
		borderWidth: 1,
		borderRadius: 5,
		paddingLeft: 5,
		fontFamily:"Poppins"
	},
	title: {
		fontSize: 20,
		color: "#2d2d2d",
		// fontWeight: "bold",
		fontFamily:"Poppins2"
	},
	body: {
		paddingHorizontal: "2%",
		paddingVertical: "3%",
	},
	titleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	text:{
		fontFamily:"Poppins"
	}
});
