import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import { SignUp } from "../screens/SignUpScreen";
import SignUpScreen2 from "../screens/SignupScreen2";
import VerifyAccountScreen from "../screens/VerifyAccountScreen";
import { TabNavigator } from "./TabStack";
import React, { useEffect, useState } from "react";
import OnBoardingScreen from "../screens/OnBoardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SignUpForm } from "../Components/SignupForm";

const Stack = createStackNavigator();

const AuthenticationStack = () => {
	const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

	const checkForFirstTimeLoaded = async () => {
		const appData = await AsyncStorage.getItem("isAppFirstLaunched");
		console.log(appData);
		if (appData == null) {
			setIsAppFirstLaunched(true);
			AsyncStorage.setItem("isAppFirstLaunched", "false");
		} else {
			setIsAppFirstLaunched(false);
		}
	};

	useEffect(() => {
		checkForFirstTimeLoaded();
	}, []);

	return (
		isAppFirstLaunched !== null && (
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{isAppFirstLaunched && (
					<Stack.Screen component={OnBoardingScreen} name="OnBoarding" />
				)}
				<Stack.Screen component={LoginScreen} name="Log-in" />
				<Stack.Screen component={SignUp} name="Sign-up" />
				<Stack.Screen component={VerifyAccountScreen} name="verify" />
				<Stack.Screen component={SignUpScreen2} name="Sign-up2" />
				<Stack.Screen component={TabNavigator} name="Tab" />
			</Stack.Navigator>
		)
	);
};

//in the aunthentication stack, if the user is just coming ti the app for the first time, show the onboarding screen and save the result to the async storage

export default AuthenticationStack;
