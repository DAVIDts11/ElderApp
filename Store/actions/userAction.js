export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const userSignUp = user => ({
    type: SIGNUP,
    payload: { user }
});

const userLogin = user => ({
    type: LOGIN,
    payload: { user }
});

export const SIGNUP_ACTION = { userSignUp };
export const LOGIN_ACTION = { userLogin };

