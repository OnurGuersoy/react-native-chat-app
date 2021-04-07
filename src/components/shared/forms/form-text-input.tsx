import React, { FunctionComponent } from 'react';
import { Control, Controller } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';
import { View } from 'react-native';
import { HelperText, TextInput } from 'react-native-paper';
import { styles } from '../styles';

interface FormTextInputProps {
	name: string;
	control: Control;
	textInputLabel: string;
	rules?: Exclude<
		RegisterOptions,
		'valueAsNumber' | 'valueAsDate' | 'setValueAs'
	>;
	showError?: boolean;
	errorMessage?: string | undefined;
	isSecure?: boolean;
	controllerDefaultValue?: string;
	keyboardType?:
		| 'default'
		| 'email-address'
		| 'numeric'
		| 'phone-pad'
		| 'number-pad'
		| 'decimal-pad'
		| 'visible-password'
		| 'ascii-capable'
		| 'numbers-and-punctuation'
		| 'url'
		| 'name-phone-pad'
		| 'twitter'
		| 'web-search'
		| undefined;
}

export const FormTextInputComponent: FunctionComponent<FormTextInputProps> = ({
	name,
	controllerDefaultValue,
	control,
	rules,
	textInputLabel,
	isSecure,
	showError,
	errorMessage,
	keyboardType
}: FormTextInputProps) => (
	<View>
		<Controller
			name={name}
			control={control}
			defaultValue={controllerDefaultValue}
			rules={rules}
			render={({ onChange, value, onBlur }) => (
				<TextInput
					label={textInputLabel}
					onChangeText={(text) => onChange(text)}
					value={value}
					style={styles.input}
					onBlur={onBlur}
					secureTextEntry={isSecure}
					accessibilityTraits
					accessibilityComponentType
					error={showError}
					keyboardType={keyboardType}
				/>
			)}
		/>
		{errorMessage && <HelperText type="error">{errorMessage}</HelperText>}
	</View>
);

FormTextInputComponent.defaultProps = {
	rules: undefined,
	showError: false,
	errorMessage: undefined,
	isSecure: false,
	controllerDefaultValue: '',
	keyboardType: 'default'
};
