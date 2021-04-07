/* eslint-disable react/prop-types */
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { FunctionComponent } from 'react';
import { HomePage } from './home/home';
import { MapPage } from './map/map';
import { SettingsPage } from './settings/settings';

const BottomTabBar = createMaterialBottomTabNavigator();

export const Main: FunctionComponent = () => (
	<BottomTabBar.Navigator initialRouteName="Home" backBehavior="history">
		<BottomTabBar.Screen
			name="Settings"
			component={SettingsPage}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<Ionicons
						name={focused ? 'settings' : 'settings-outline'}
						size={23}
						color={color}
					/>
				)
			}}
		/>
		<BottomTabBar.Screen
			name="Home"
			component={HomePage}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<Ionicons
						name={focused ? 'home' : 'home-outline'}
						size={23}
						color={color}
					/>
				)
			}}
		/>
		<BottomTabBar.Screen
			name="Map"
			component={MapPage}
			options={{
				tabBarIcon: ({ focused, color }) => (
					<Ionicons
						name={focused ? 'map' : 'map-outline'}
						size={23}
						color={color}
					/>
				)
			}}
		/>
	</BottomTabBar.Navigator>
);
