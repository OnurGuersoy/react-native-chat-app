/* eslint-disable global-require */
import React, { FunctionComponent } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { styles } from './shared/styles';

export const SplashScreen: FunctionComponent = () => (
	<ScrollView contentContainerStyle={styles.container}>
		<View>
			<Image
				source={require('../../assets/noble-logo.jpg')}
				style={{ height: '100%', width: '100%' }}
			/>
		</View>
	</ScrollView>
);
