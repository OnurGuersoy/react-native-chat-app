import React, { FunctionComponent } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from '../shared/styles';

export const MapPage: FunctionComponent = () => (
	<ScrollView contentContainerStyle={styles.container}>
		<View>
			<Text>Map</Text>
		</View>
	</ScrollView>
);
