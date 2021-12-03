export enum ActionTypes {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    REGISTER = "REGISTER"
};

export interface UserState {
    id: number,
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string
};

interface LoginAction {
    type: ActionTypes.LOGIN,
    payload: UserState
};

interface LogoutAction {
    type: ActionTypes.LOGOUT
};

interface RegisterAction {
    type: ActionTypes.REGISTER,
    payload: UserState
};

type Actions = LoginAction | LogoutAction | RegisterAction;

export default Actions;