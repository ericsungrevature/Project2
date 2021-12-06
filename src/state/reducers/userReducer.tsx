import Actions, { ActionTypes, UserState } from "../actions";

const initialState: UserState = {
    id: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
};

const userReducer = (state: UserState = initialState, action: Actions): UserState => {
    switch(action.type) {
        case ActionTypes.LOGIN:
            console.log("Login");
            return action.payload;
            // return {
            //     ...state,
            //     username: action.payload.username,
            //     password: action.payload.password,
            // };
        case ActionTypes.LOGOUT:
            console.log("Logout");
            return initialState;
        case ActionTypes.REGISTER:
            console.log("Register");
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;