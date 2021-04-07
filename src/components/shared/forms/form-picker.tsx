import { Picker } from '@react-native-picker/picker';
import React, { FunctionComponent } from 'react';
import { Control, Controller } from 'react-hook-form';
import { View } from 'react-native';
import { styles } from '../styles';

interface FormTextInputProps {
	name: string;
	control: Control;
	items: PickerItem[];
}

export const FormPickerComponent: FunctionComponent<FormTextInputProps> = ({
	name,
	control,
	items
}: FormTextInputProps) => (
	<View>
		<Controller
			name={name}
			control={control}
			defaultValue={items.length !== 0 ? items[0].value : ''}
			render={({ onChange, value }) => (
				<Picker
					selectedValue={value}
					onValueChange={(itemValue) => onChange(itemValue)}
					style={styles.input}
				>
					{items.map((item) => (
						<Picker.Item
							key={item.label}
							label={item.label}
							value={item.value}
						/>
					))}
				</Picker>
			)}
		/>
	</View>
);

type PickerItem = {
	label: string;
	value: string | number;
};
