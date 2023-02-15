import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../screens/setting";
import { Form } from "../Components/ProductAdd"
import { Notification } from "../Components/Notification";
import { Account } from "../screens/account";
import UploadEventScreen from "../screens/UploadEventScreen";
import UploadPostScreen from "../screens/UploadPostScreen";
import ScanTicketScreen from "../screens/ScanTicketScreen";
import TicketDisplayScreen from "../screens/TicketDisplayScreen";

const Stack = createStackNavigator();
export function ProfileStack() {
	return (
		<Stack.Navigator
			// initialRouteName="ProfileScreen"
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen component={Profile} name="ProfileScreen" />
			<Stack.Screen component={Account} name="AccountScreen" />
			<Stack.Screen component={Notification} name="NotificationScreen"/> 
			<Stack.Screen component={ScanTicketScreen} name="ScanTicketScreen"/> 
			<Stack.Screen component={TicketDisplayScreen} name="TicketScreen"/> 
			<Stack.Screen component={UploadPostScreen} name="UploadPostScreen"/> 
			<Stack.Screen component={UploadEventScreen} name="UploadEventScreen"/> 

			
		</Stack.Navigator>
	);
}
