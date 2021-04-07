export const TOGGLE_THEME = 'TOGGLE_THEME';

interface ToggleThemeAction {
	type: typeof TOGGLE_THEME;
}

export type SettingsAction = ToggleThemeAction;

export const toggleTheme = (): ToggleThemeAction => ({
	type: TOGGLE_THEME
});
