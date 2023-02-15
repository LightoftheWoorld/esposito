import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EventStack } from "./EventStack";
import { ProfileStack } from "./ProfileStack";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants/theme";
import {HomeStack} from "./HomeStack"

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Home") {
						iconName = focused
							? "ios-newspaper"
							: "ios-newspaper-outline";
					} else if (route.name === "Event") {
						iconName = focused ? "ios-calendar" : "ios-calendar-outline";
					} else if (route.name === "Profile") {
						iconName = focused ? "ios-person-circle" : "ios-person-circle-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
				tabBarActiveTintColor: COLORS.primary,
				tabBarInactiveTintColor: COLORS.darkgray,
			})}
		>
			<Tab.Screen name="Home" component={HomeStack} />
			<Tab.Screen name="Event" component={EventStack} />
			<Tab.Screen name="Profile" component={ProfileStack}/>
		</Tab.Navigator>
	);
};