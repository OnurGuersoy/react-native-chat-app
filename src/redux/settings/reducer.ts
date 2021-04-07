import { SettingsAction } from './actions';

interface SettingsState {
	darkTheme: boolean;
}

const initialSettingsState: SettingsState = {
	darkTheme: false
};

export const settingsReducer = (
	state: SettingsState = initialSettingsState,
	action: SettingsAction
) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return { ...state, darkTheme: !state.darkTheme };
		default:
			return state;
	}
};
