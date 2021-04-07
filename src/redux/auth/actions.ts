export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

interface LoginAction {
	type: typeof LOGIN;
	accessToken: string;
	refreshToken: string;
}

interface LogoutAction {
	type: typeof LOGOUT;
}

export type AuthenticationAction = LoginAction | LogoutAction;

export const login = ({
	accessToken,
	refreshToken
}: LoginTokenData): LoginAction => ({
	type: LOGIN,
	accessToken,
	refreshToken
});

export const logout = (): LogoutAction => ({
	type: LOGOUT
});

export type LoginTokenData = {
	accessToken: string;
	refreshToken: string;
};
