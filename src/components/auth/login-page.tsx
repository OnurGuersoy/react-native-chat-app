import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useLoginMutation } from '../../generated/api';
import { login, LoginTokenData } from '../../redux/auth/actions';
import { FormTextInputComponent } from '../shared/forms/form-text-input';
import { LoaderComponent } from '../shared/loader';
import { styles } from '../shared/styles';
import { AuthStackParamList } from './auth-stack-param-list';
import { ERROR_MESSAGES, LoginInput } from './form-validation';

type LoginScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Login'
>;

type LoginScreenProps = {
	navigation: LoginScreenNavigationProp;
};

export const LoginPage: FunctionComponent<LoginScreenProps> = ({
	navigation
}) => {
	const dispatch = useDispatch();
	const { control, handleSubmit, errors, formState } = useForm<LoginInput>({
		mode: 'onChange'
	});
	const [loginMutation, { error, loading }] = useLoginMutation();

	const dispatchLoginUser = (data: LoginTokenData) => {
		dispatch(login(data));
	};

	const goToSignUp = () => {
		navigation.navigate('SignUp');
	};

	const submitForm = async (input: LoginInput) => {
		const loginResult = await loginMutation({
			variables: { nickName: input.nickName, password: input.password }
		});
		const loginData = loginResult.data?.login;
		if (loginData) {
			dispatchLoginUser(loginData);
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
				<FormTextInputComponent
					name="nickName"
					control={control}
					textInputLabel="Username"
					rules={{
						required: {
							message: ERROR_MESSAGES.REQUIRED,
							value: true
						}
					}}
					showError={!!error || !!errors.nickName}
					errorMessage={errors.nickName?.message}
				/>
				<FormTextInputComponent
					name="password"
					control={control}
					textInputLabel="Password"
					rules={{
						required: {
							message: ERROR_MESSAGES.REQUIRED,
							value: true
						}
					}}
					showError={!!error || !!errors.password}
					errorMessage={errors.password?.message}
					isSecure
				/>
				<Button
					mode="contained"
					accessibilityComponentType
					accessibilityTraits
					onPress={handleSubmit(submitForm)}
					disabled={!formState.isValid}
					style={styles.actionButton}
				>
					Login
				</Button>
				<Button
					accessibilityTraits
					accessibilityComponentType
					mode="outlined"
					onPress={goToSignUp}
				>
					Sign Up
				</Button>
				<LoaderComponent loading={loading} />
			</View>
		</ScrollView>
	);
};
