export type LoginInput = {
	nickName: string;
	password: string;
};

export type RegisterInput = {
	nickName: string;
	email: string;
	password: string;
	role: number;
};

export const REGEX = {
	email: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
	password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/i
};

export const ERROR_MESSAGES = {
	REQUIRED: 'This field is required',
	EMAIL_INVALID: 'Not a valid email',
	PASSWORD_INVALID:
		'Password has to contain at least 1 small, big and special character and at least 1 number'
};
