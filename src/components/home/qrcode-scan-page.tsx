import { StackNavigationProp } from '@react-navigation/stack';
import { Camera } from 'expo-camera';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../shared/styles';
import { HomeStackParamList } from './home-stack-param-list';

type QRCodeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Me'>;

type QRCodeScreenProps = {
	navigation: QRCodeScreenNavigationProp;
};

export const QRCodeScanPage: FunctionComponent<QRCodeScreenProps> = ({
	navigation
}) => {
	const [hasPermission, setHasPermission] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	return (
		<ScrollView contentContainerStyle={styles.cameraContainer}>
			<View>
				{hasPermission ? (
					<Camera
						onBarCodeScanned={(result) => {
							console.log(result.data);
							navigation.goBack();
						}}
						style={styles.useWholeSpace}
					/>
				) : (
					<Text>No access to camera</Text>
				)}
			</View>
		</ScrollView>
	);
};
