import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { useMeQuery } from '../../generated/api';
import { LoaderComponent } from '../shared/loader';
import { HomeStackParamList } from './home-stack-param-list';

type MeScreenNavigationProp = StackNavigationProp<HomeStackParamList, 'Me'>;

type MeScreenProps = {
	navigation: MeScreenNavigationProp;
};

export const Me: FunctionComponent<MeScreenProps> = ({ navigation }) => {
	const { loading, error, data } = useMeQuery();

	return (
		<View>
			<Appbar.Header accessibilityComponentType accessibilityTraits>
				<Appbar.Content
					title="Noble"
					subtitle={data?.me.nickName}
					accessibilityComponentType
					accessibilityTraits
				/>
				<Appbar.Action
					icon="qrcode-scan"
					onPress={() => navigation.navigate('QRCodeScan')}
					accessibilityComponentType
					accessibilityTraits
				/>
			</Appbar.Header>
			<LoaderComponent loading={loading} />
		</View>
	);
};
