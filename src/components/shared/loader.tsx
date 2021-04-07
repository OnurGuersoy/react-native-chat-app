import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Modal, Portal } from 'react-native-paper';

type LoaderComponentProps = {
	loading: boolean;
};

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: '#00000040'
	},
	activityIndicatorWrapper: {
		backgroundColor: '#FFFFFF',
		height: 100,
		width: 100,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});

export const LoaderComponent = ({ loading }: LoaderComponentProps) => (
	<Portal>
		<Modal visible={loading}>
			<View style={styles.modalBackground}>
				<View style={styles.activityIndicatorWrapper}>
					<ActivityIndicator
						animating={loading}
						size="large"
						hidesWhenStopped
						accessibilityTraits
						accessibilityComponentType
					/>
				</View>
			</View>
		</Modal>
	</Portal>
);
