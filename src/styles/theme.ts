import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme
} from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from 'react-native-paper';

export const lightTheme = {
	...DefaultTheme,
	...NavigationDefaultTheme,
	colors: {
		...NavigationDefaultTheme.colors,
		...DefaultTheme.colors,
		primary: '#ECB602',
		accent: '#290849'
	}
};

export const darkTheme = {
	...DarkTheme,
	...NavigationDarkTheme,
	colors: {
		...NavigationDarkTheme.colors,
		...DarkTheme.colors,
		primary: '#290849',
		accent: '#ECB602'
	}
};
