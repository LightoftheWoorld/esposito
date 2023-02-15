import React, { useContext, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	TextInput,
	Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ModalPopUp } from "../Components/Modal";
import { AccordionItem } from "../Components/AccordionItem";
import { COLORS } from "../constants/theme";
import { AuthContext } from "../context/AuthContext";

const { width } = Dimensions.get("screen");
export const Account = () => {
	const [visible, setVisible] = React.useState(false);
	const [checked, setChecked] = useState(false)
	const {logout} = useContext(AuthContext)

	return (
		<SafeAreaView style={{paddingTop: 40}}>
			<View style={{alignSelf: "center", paddingBottom: 15}}><Text style={{fontSize: 25, fontWeight: "600", fontFamily:"Poppins2"}}>Account</Text></View>
			<AccordionItem />
			<View style={styles.container}>
			<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => {
						setChecked(true);
					}}
				>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Change Password</Text>
					</View>
				</TouchableOpacity>
			</View>

			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => {
						setVisible(true);
					}}
				>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Deactivate Account</Text>
					</View>
				</TouchableOpacity>
			</View>


			<ModalPopUp visible={visible}>
				<View style={{ alignItems: "center" }}></View>
				<>
					<View
						style={{
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontSize: 20,
								fontWeight: "600",
								color: "rgba(39, 46, 57, 1)",
								fontFamily:"Poppins3"
							}}
						>
							Deactivate Account
						</Text>
						<Text
							style={{
								width: width / 1.6,
								fontSize: 13,
								fontWeight: "300",
								textAlign: "center",
								color: "rgba(112.62, 112.62, 112.62, 1)",
								fontFamily:"Poppins"
							}}
						>
							Are you sure you want to deactivate your account? This will erase
							all data you have on this app.
						</Text>
						<TouchableOpacity onPress={() => setVisible(false)}>
							<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
								<View style={{width: 126, height: 42, backgroundColor: COLORS.lightGray3, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
									<Text style={{color: COLORS.darkgray, fontFamily:"Poppins"}}>Cancel</Text>
								</View>
								<View style={{width: 126, height: 42, backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center", marginLeft: 25, borderRadius: 5 }}>
									<Text style={{color: COLORS.white, fontFamily:"Poppins"}}>Confirm</Text>
								</View>
							</View>
						</TouchableOpacity>
					</View>
				</>
			</ModalPopUp>
			

			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={() => {
						setChecked(true);
					}}
				>
					<View style={styles.titleContainer}>
						<Text style={styles.title}>Sign Out</Text>
					</View>
				</TouchableOpacity>
			</View>

			

			

			<ModalPopUp visible={checked}>
				<View style={{ alignItems: "center" }}></View>
				<>
					<View
						style={{
							alignItems: "center",
						}}
					>
						<Text
							style={{
								fontSize: 26,
								fontWeight: "600",
								color: "rgba(39, 46, 57, 1)",
								fontFamily:"Poppins2"
							}}
						>
							Sign Out
						</Text>
						<Text
							style={{
								width: width / 1.6,
								fontSize: 13,
								fontWeight: "300",
								textAlign: "center",
								color: "rgba(112.62, 112.62, 112.62, 1)",
								fontFamily:"Poppins"
							}}
						>
						Are you sure you want to sign out of this account? 
						</Text>

							<View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 10}}>
                                 <TouchableOpacity onPress={()=>setChecked(false)}>
								<View style={{width: 126, height: 42, backgroundColor: COLORS.lightGray3, justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
									<Text style={{color: COLORS.darkgray, fontFamily:"Poppins"}}>Cancel</Text>
								</View>
								</TouchableOpacity>

						 <TouchableOpacity onPress={() => logout()}>
								<View style={{width: 126, height: 42, backgroundColor: COLORS.primary, justifyContent: "center", alignItems: "center", marginLeft: 25, borderRadius: 5 }}>
									<Text style={{color: COLORS.white, fontFamily:"Poppins"}}>Confirm</Text>
								</View>
						 </TouchableOpacity> 

							</View>
					</View>
				</>
			</ModalPopUp>


			


		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	title: {
		fontSize: 15,
		color: "#2d2d2d",
		// fontWeight: "bold",
		fontFamily:"Poppins2"
	},
	titleContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
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
});
