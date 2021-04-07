import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { HomeStackParamList } from './home-stack-param-list';
import { Me } from './me';
import { QRCodeScanPage } from './qrcode-scan-page';

const HomeStack = createStackNavigator<HomeStackParamList>();

export const HomePage: FunctionComponent = () => (
	<HomeStack.Navigator initialRouteName="Me">
		<HomeStack.Screen
			name="Me"
			component={Me}
			options={{ headerShown: false }}
		/>
		<HomeStack.Screen
			name="QRCodeScan"
			component={QRCodeScanPage}
			options={{ headerShown: false }}
		/>
	</HomeStack.Navigator>
);
