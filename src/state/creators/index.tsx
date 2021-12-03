import { Dispatch } from "redux";
import Actions, { ActionTypes } from "../actions";

export const loginCreator = (count: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.LOGIN,
            payload: count
        })
    }
};

export const logoutCreator = () => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.LOGOUT
        })
    }
};