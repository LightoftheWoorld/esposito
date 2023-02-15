import { createStackNavigator } from "@react-navigation/stack";
import EventsScreen from "../screens/EventScreen";
import CheckOutScreen from "../screens/CheckOutScreen";
import EventDetails from "../screens/EventDetails";
import ProcessDetailsScreen from "../screens/ProcessDetailsScreen";
const Stack = createStackNavigator();
export function EventStack() {
	return (
		<Stack.Navigator
			// initialRouteName="AdScreen"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen component={EventsScreen} name="EventScreen" />
			<Stack.Screen component={EventDetails} name="EventDetails" />
			<Stack.Screen component={CheckOutScreen} name="CheckOutScreen" />
			{/* <Stack.Screen component={ProcessDetailsScreen} name="ProcessDetails" /> */}
		</Stack.Navigator>
	);
}
