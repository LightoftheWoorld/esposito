import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen"
import VerifyAccountScreen from "../screens/VerifyAccountScreen"
import { SignUp } from "../screens/SignUpScreen";
import { TabNavigator } from "./TabStack";
import SignUpScreen2 from "../screens/SignupScreen2"
import  { Form } from "../Components/ProductAdd"

const Stack = createStackNavigator();
export function MainStack() {
	return (
		<Stack.Navigator
			// initialRouteName="verify"
			screenOptions={{ headerShown: false }}
		>
			 <Stack.Screen component={TabNavigator} name="Tab" /> 

		</Stack.Navigator>
	);
}
