import { Formik } from "formik";
import React from "react";
import {
	Dimensions,
	KeyboardAvoidingView,
	Text,
	View,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import { FormInput } from "./FormInput";
import { FormSubmitBtn } from "./FormSubmitBtn";
import * as Yup from "yup";
import { useNavigation, StackActions } from "@react-navigation/native";
import client from "../api/client";
const { width, height } = Dimensions.get("screen");

const validationSchema = Yup.object({
	firstname: Yup.string()
		.trim()
		.min(3, "Invalid Name")
		.required("First Name is required!"),
	lastname: Yup.string()
		.trim()
		.min(3, "Invalid Name")
		.required("Last Name is required!"),
	email: Yup.string()
		.trim()
		.matches(
			/^[\w-\.]+@+([\w-\.])+babcock+(\.)+edu(\.)ng$/gi,
			"School Email required"
		)
		.required("Email is required!"),
	password: Yup.string()
		.trim()
		.min(8, "Password not long enough!")
		.required("Password required!"),
	confirmPassword: Yup.string().equals(
		[Yup.ref("password"), null],
		"Password does not match"
	),
});

export const SignUpForm = () => {
	const navigation = useNavigation();
	const [isLoading, setIsLoading] = React.useState(false);
	const [isDisabled, setDisabled] = React.useState(true);
	const userInfo = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmpassword: "",
	};
	const signUp = async (values, formikActions) => {
		setIsLoading(true);
		const res = await client.post("/signup", {
			...values,
		});

		if (res.data.success) {
			navigation.dispatch(
				StackActions.replace("verify", {
					email: values.email,
					password: values.password,
				})
			);

			console.log(res.data);
		}
	};
	return (
		<KeyboardAvoidingView
			enabled
			behavior={Platform.OS === "ios" ? "padding" : null}
			style={styles.container}
		>
			<Formik
				initialValues={userInfo}
				validationSchema={validationSchema}
				onSubmit={signUp}
			>
				{({
					values,
					errors,
					touched,
					isSubmitting,
					handleChange,
					handleBlur,
					handleSubmit,
				}) => {
					const { firstname, lastname, email, password, confirmPassword } =
						values;
					return (
						<>
							<FormInput
								value={firstname}
								error={touched.firstname && errors.firstname}
								onChangeText={handleChange("firstname")}
								onBlur={handleBlur("firstname")}
								label="First Name"
								placeholder="John"
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
							<FormInput
								value={lastname}
								error={touched.lastname && errors.lastname}
								onChangeText={handleChange("lastname")}
								onBlur={handleBlur("lastname")}
								label="Last Name"
								placeholder="Smith"
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
							<FormInput
								value={email}
								error={touched.email && errors.email}
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								autoCapitalize="none"
								label="Email"
								placeholder="email@student.babcock.edu.ng"
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
							<FormInput
								value={password}
								error={touched.password && errors.password}
								onChangeText={handleChange("password")}
								onBlur={handleBlur("password")}
								autoCapitalize="none"
								secureTextEntry
								label="Password"
								placeholder="********"
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
							<FormInput
								value={confirmPassword}
								error={touched.confirmPassword && errors.confirmPassword}
								onChangeText={handleChange("confirmPassword")}
								onBlur={handleBlur("confirmPassword")}
								autoCapitalize="none"
								secureTextEntry
								label="Password"
								placeholder="********"
								style={styles.text}
								TextInputStyle={styles.textInput}
							/>
							{errors === null ? setDisabled(true) : setDisabled(false)}
							{console.log(12, errors)}
							{isLoading ? (
								<View
									style={{
										width: width - 130,
										height: 50,
										alignSelf: "center",
										borderRadius: 10,
										justifyContent: "center",
										marginTop: 10,
										backgroundColor: "#0000ff",
									}}
								>
									<ActivityIndicator size="large" color="#FFF" />
								</View>
							) : (
								<FormSubmitBtn
									disabled={isDisabled}
									Submitting={isSubmitting}
									onPress={handleSubmit}
									// onPress={() => navigation.navigate("Tab")}
									title={"Create Account"}
								/>
							)}
						</>
					);
				}}
			</Formik>
		</KeyboardAvoidingView>
	);
};
const styles = StyleSheet.create({
	container: {
		// width: 340,
		paddingHorizontal: 10,
	},
	text: {
		fontSize: 13.5,
		fontFamily: "Poppins",
	},
	textInput: {
		backgroundColor: "#C9D9F2",
		borderRadius: 5,
		height: 33,
		width: width - 60,
		marginBottom: 2,
		paddingLeft: 5,
		fontSize: 14,
		fontFamily: "Poppins",
		alignSelf: "center",
	},
});
