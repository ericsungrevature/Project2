import { Dispatch } from "redux";
import Actions, { ActionTypes, UserState } from "../actions";

export const loginCreator = (user: UserState) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: user
        })
    };
};

export const logoutCreator = () => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.LOGOUT
        })
    };
};

export const registerCreator = (user: UserState) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.REGISTER,
            payload: user
        })
    };
};