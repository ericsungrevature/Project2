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
    switch(action.type) {
        case ActionTypes.LOGIN:
            console.log("Login");
            return action.payload;
        case ActionTypes.LOGOUT:
            console.log("Logout");
            return initialState;
        case ActionTypes.REGISTER:
            console.log("Register");
            return action.payload;
        case ActionTypes.ADDTOCART:
            console.log("add to cart");
            state.cart.push(action.payload);
            return state;
        case ActionTypes.REMOVEFROMCART:
            console.log("remove from cart");
            const newArray = Object.assign([], state.cart);
            const index = newArray.indexOf(action.payload, 0);
            if (index > -1) {
                newArray.splice(index, 1);
            }
            return {
                ...state,
                cart: newArray
            };
        case ActionTypes.EMPTYCART:
            console.log("empty cart");
            return {
                ...state,
                cart: []
            }
        case ActionTypes.ADDTOTAGS:
            console.log("add to tags");
            if(state.tags.indexOf(action.payload) === -1) {
                state.tags.push(action.payload);
            };
            return state;
        case ActionTypes.REMOVEFROMTAGS:
            console.log("remove from tags");
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.payload)
            };
        default:
            return state;
    }
};

export default userReducer;