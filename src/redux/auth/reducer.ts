import { AuthenticationAction, LOGIN, LOGOUT } from './actions';

interface AuthenticationState {
	accessToken: string | null;
	refreshToken: string | null;
}

const initialState: AuthenticationState = {
	accessToken: null,
	refreshToken: null
};

export const authenticationReducer = (
	state: AuthenticationState = initialState,
	action: AuthenticationAction
): AuthenticationState => {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				accessToken: action.accessToken,
				refreshToken: action.refreshToken
			};
		case LOGOUT:
			return { ...state, accessToken: null, refreshToken: null };
		default:
			return state;
	}
};
