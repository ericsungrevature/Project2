import { Dispatch } from "redux";
import Actions, { ActionTypes, RecipeState, UserState } from "../actions";

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

export const addToCartCreator = (recipe: RecipeState) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.ADDTOCART,
            payload: recipe
        })
    };
};

export const removeFromCartCreator = (recipe: RecipeState) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.REMOVEFROMCART,
            payload: recipe
        })
    };
};

export const addToTagsCreator = (tag: string) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.ADDTOTAGS,
            payload: tag
        })
    }
}

export const removeFromTagsCreator = (tag: string) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({
            type: ActionTypes.REMOVEFROMTAGS,
            payload: tag
        })
    }
}