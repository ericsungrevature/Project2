import Actions, { ActionTypes, UserState } from "../actions";

const initialState: UserState = {
    id: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    cart: [],
    tags: []
};

const userReducer = (state: UserState = initialState, action: Actions): UserState => {
    // localStorage.setItem("user_state", JSON.stringify(state));
    switch(action.type) {
        case ActionTypes.LOGIN:
            console.log("Login");
            // localStorage.setItem("user_state", JSON.stringify(action.payload));
            return action.payload;
        case ActionTypes.LOGOUT:
            console.log("Logout");
            // localStorage.clear();
            return initialState;
        case ActionTypes.REGISTER:
            console.log("Register");
            // localStorage.setItem("user_state", JSON.stringify(action.payload));
            return action.payload;
        case ActionTypes.ADDTOCART:
            console.log("add to cart");
            state.cart.push(action.payload);
            // localStorage.setItem("user_state", JSON.stringify(state));
            return state;
        case ActionTypes.REMOVEFROMCART:
            console.log("remove from cart");
            // localStorage.setItem("user_state", JSON.stringify({
            //     ...state,
            //     cart: state.cart.filter(recipe => recipe !== action.payload)
            // }));
            return {
                ...state,
                cart: state.cart.filter(recipe => recipe !== action.payload)
            };
        case ActionTypes.ADDTOTAGS:
            console.log("add to tags");
            if(state.tags.indexOf(action.payload) === -1) {
                state.tags.push(action.payload);
            };
            // localStorage.setItem("user_state", JSON.stringify(state));
            return state;
        case ActionTypes.REMOVEFROMTAGS:
            console.log("remove from tags");
            // localStorage.setItem("user_state", JSON.stringify({
            //     ...state,
            //     tags: state.tags.filter(tag => tag !== action.payload)
            // }));
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.payload)
            };
        default:
            return state;
    }
};

export default userReducer;