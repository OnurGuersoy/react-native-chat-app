import React, { FunctionComponent } from 'react';
import { ScrollView, View } from 'react-native';
import { Button, List, Switch } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/actions';
import { toggleTheme } from '../../redux/settings/actions';
import { RootState } from '../../redux/store';
import { styles } from '../shared/styles';

export const SettingsPage: FunctionComponent = () => {
	const dispatch = useDispatch();
	const isDarkMode = useSelector<RootState, boolean>(
		(state) => state.settings.darkTheme
	);

	const dispatchLogoutUser = () => {
		dispatch(logout());
	};

	const dispatchToggleDarkMode = () => {
		dispatch(toggleTheme());
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
				<List.Section accessibilityTraits accessibilityComponentType>
					<List.Subheader
						accessibilityTraits
						accessibilityComponentType
					>
						Styles
					</List.Subheader>
					<List.Item
						accessibilityComponentType
						accessibilityTraits
						title="Apply darkmode"
						right={() => (
							<Switch
								value={isDarkMode}
								onValueChange={dispatchToggleDarkMode}
								accessibilityTraits
								accessibilityComponentType
							/>
						)}
					/>
				</List.Section>
				<Button
					accessibilityComponentType
					accessibilityTraits
					onPress={dispatchLogoutUser}
					mode="contained"
				>
					Logout
				</Button>
			</View>
		</ScrollView>
	);
};
