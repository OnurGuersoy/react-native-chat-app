import React, { FunctionComponent } from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { AuthStackParamList } from './auth-stack-param-list';
import { LoginPage } from './login-page';
import { SignUpPage } from './sign-up-page';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
enableScreens(true);

export const AuthPage: FunctionComponent = () => (
	<AuthStack.Navigator initialRouteName="Login">
		<AuthStack.Screen name="Login" component={LoginPage} />
		<AuthStack.Screen name="SignUp" component={SignUpPage} />
	</AuthStack.Navigator>
);
