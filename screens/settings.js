import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("screen");
const Person = (
	<Icon
		name="user-edit"
		size={30}
		color="#717171"
		light
		style={{ position: "absolute",}}
	/>
);
const notification = (
	<Icon
		name="bell"
		size={30}
		color="#717171"
		light
		style={{ position: "absolute", }}
	/>
);
const product = (
	<Icon
		name="box"
		size={30}
		color="#717171"
		light
		style={{ position: "absolute", }}
	/>
);
const warning = (
	<Icon
		name="exclamation-triangle"
		size={30}
		color="#717171"
		light
		style={{ position: "absolute", }}
	/>
);
const chat = (
	<Icon
		name="comment-alt"
		size={30}
		color="#717171"
		light
		style={{ position: "absolute", }}
	/>
);
const direction = (
	<Icon
		name="angle-right"
		size={30}
		color="#717171"
		light
		style={{position:'absolute' ,paddingLeft: width - 70, paddingTop: 50}}
	/>
);


export const Profile= () => {
	return (
		<View style={styles.container}>
			<View style={{ flexDirection: "row" }}>
				<View style={styles.itemcontainer}>
					<Text style={{ fontWeight: "400", fontSize: 60, color: "#F6F6F6" }}>
						TA
					</Text>
				</View>
				<View style={{ paddingTop: 20, paddingLeft: 10 }}>
					<Text style={{ fontSize: 30, fontWeight: "700" }}>Ariyo Taiwo</Text>
					<Text style={styles.email}>ariyo3630@student.babcock.edu.ng</Text>
				</View>
			</View>
			<View style={{ paddingTop: 20 }}>
				<View style={styles.line}></View>
				<Text style={styles.settings}>{Person} Account</Text> 
				{direction}
				<View style={styles.line}></View>
				<Text style={styles.settings}>{notification}  General</Text>
				<View style={styles.line}></View>
				<Text style={styles.settings}>{product} Product</Text>
				<View style={styles.line}></View>
				<Text style={styles.settings}>{warning} Language</Text>
				<View style={styles.line}></View>
				<Text style={styles.settings}>{chat} Help</Text>
				<View style={styles.line}></View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "flex-start",
		paddingTop: 120,
		paddingLeft: 20,
	},
	itemcontainer: {
		backgroundColor: "#4484E4",
		height: 100,
		width: 100,
		borderRadius: 50,
		alignItems: "center",
		justifyContent: "center",
	},
	email: { fontWeight: "300", color: "#717171", fontSize: 12 },
	settings: {
		color: "#717171",
		fontSize: 25,
		paddingTop: 25,
		fontWeight: "400",
		// paddingLeft: 50
	},
	line: {
		height: 1,
		width: width - 50,
		backgroundColor: "#D9D9D9",
		top: 10,
		alignSelf: "center",
	},
});
