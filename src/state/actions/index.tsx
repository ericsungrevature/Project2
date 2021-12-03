export enum ActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT"
};

interface LoginAction {
    type: ActionTypes.LOGIN,
    payload: number
};

interface LogoutAction {
    type: ActionTypes.LOGOUT
};

type Actions = LoginAction | LogoutAction;

export default Actions;