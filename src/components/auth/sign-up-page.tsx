import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import {
	useLoginMutation,
	useRegisterMutation,
	UserType
} from '../../generated/api';
import { login, LoginTokenData } from '../../redux/auth/actions';
import { FormPickerComponent } from '../shared/forms/form-picker';
import { FormTextInputComponent } from '../shared/forms/form-text-input';
import { LoaderComponent } from '../shared/loader';
import { styles } from '../shared/styles';
import { UserType as UserTypeNumber } from '../shared/user-type';
import { AuthStackParamList } from './auth-stack-param-list';
import { ERROR_MESSAGES, REGEX, RegisterInput } from './form-validation';

type SignUpScreenNavigationProp = StackNavigationProp<
	AuthStackParamList,
	'Login'
>;

type SignUpScreenProps = {
	navigation: SignUpScreenNavigationProp;
};

export const SignUpPage: FunctionComponent<SignUpScreenProps> = () => {
	const dispatch = useDispatch();
	const { control, handleSubmit, errors, formState } = useForm<RegisterInput>(
		{
			mode: 'onChange'
		}
	);
	const [loginMutation] = useLoginMutation();
	const [registerMutation, { error, loading }] = useRegisterMutation();

	const dispatchLoginUser = (data: LoginTokenData) => {
		dispatch(login(data));
	};

	const submitForm = async (input: RegisterInput) => {
		const registerResult = await registerMutation({
			variables: { input: { ...input } }
		});

		if (registerResult) {
			const loginResult = await loginMutation({
				variables: {
					nickName: input.nickName,
					password: input.password
				}
			});
			const loginData = loginResult.data?.login;
			if (loginData) {
				dispatchLoginUser(loginData);
			}
		}
	};

	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View>
				<FormTextInputComponent
					control={control}
					name="nickName"
					textInputLabel="Nickname"
					rules={{
						required: {
							message: ERROR_MESSAGES.REQUIRED,
							value: true
						},
						minLength: {
							value: 7,
							message:
								'Your unique nickname must have at least 7 characters'
						},
						maxLength: {
							value: 20,
							message:
								'Your unique nickname must have a maximum of 20 characters'
						}
					}}
					showError={!!error || !!errors.nickName}
					errorMessage={errors.nickName?.message}
				/>
				<FormTextInputComponent
					control={control}
					name="email"
					textInputLabel="Email"
					rules={{
						required: {
							message: ERROR_MESSAGES.REQUIRED,
							value: true
						},
						pattern: {
							value: REGEX.email,
							message: ERROR_MESSAGES.EMAIL_INVALID
						}
					}}
					showError={!!error || !!errors.email}
					errorMessage={errors.email?.message}
					keyboardType="email-address"
				/>
				<FormTextInputComponent
					name="password"
					control={control}
					textInputLabel="Password"
					rules={{
						required: {
							message: ERROR_MESSAGES.REQUIRED,
							value: true
						},
						pattern: {
							value: REGEX.password,
							message: ERROR_MESSAGES.PASSWORD_INVALID
						},
						minLength: {
							value: 8,
							message: 'Password must have at least 8 characters'
						}
					}}
					showError={!!error || !!errors.password}
					errorMessage={errors.password?.message}
					isSecure
				/>
				<FormPickerComponent
					items={[
						{
							label: UserType.Visitor,
							value: UserTypeNumber.Visitor
						},
						{
							label: UserType.Location,
							value: UserTypeNumber.Location
						}
					]}
					control={control}
					name="role"
				/>
				<Button
					mode="contained"
					accessibilityComponentType
					accessibilityTraits
					onPress={handleSubmit(submitForm)}
					disabled={!formState.isValid}
					style={styles.actionButton}
				>
					Create Account
				</Button>
				<LoaderComponent loading={loading} />
			</View>
		</ScrollView>
	);
};
