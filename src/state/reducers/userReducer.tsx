import Actions, { ActionTypes } from "../actions";

interface UserState {
    id: number,
    username: string,
    password: string,
    email: string
};

const initialState: UserState = {
    id: 0,
    username: "",
    password: "",
    email: ""
};

const userReducer = (state: UserState = initialState, action: Actions): UserState => {
    switch(action.type) {
        case ActionTypes.LOGIN:
            console.log("Login");
            return {
                ...state,
                id: state.id - action.payload
            };
        case ActionTypes.LOGOUT:
            console.log("Logout");
            return {
                ...state,
                id: 0
            };
        default:
            return state;
    }
};

export default userReducer;