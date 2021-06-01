export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const userLogin = user => ({
    type: LOGIN,
    payload: { user }
});

export const LOGIN_ACTION = { userLogin };

