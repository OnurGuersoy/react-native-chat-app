import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { darkTheme, lightTheme } from '../styles/theme';
import { AuthPage } from './auth/auth-page';
import { Main } from './main';

export const Entry = () => {
	const token = useSelector<RootState>(
		(state) => state.authentication.accessToken
	);

	const darkThemed = useSelector<RootState>(
		(state) => state.settings.darkTheme
	);

	return (
		<NavigationContainer theme={darkThemed ? darkTheme : lightTheme}>
			<PaperProvider theme={darkThemed ? darkTheme : lightTheme}>
				{token ? <Main /> : <AuthPage />}
			</PaperProvider>
		</NavigationContainer>
	);
};
