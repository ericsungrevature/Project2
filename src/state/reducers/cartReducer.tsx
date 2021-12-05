import Actions, { ActionTypes, CartState } from "../actions";

const initialState: CartState = {
    cart: []
}

const cartReducer = ((state: CartState = initialState, action: Actions): CartState => {
    switch(action.type) {
        case ActionTypes.ADDTOCART:
            console.log("add to cart");
            state.cart.push(action.payload);
            return state;
        case ActionTypes.REMOVEFROMCART:
            console.log("remove from cart");
            return {
                cart: state.cart.filter(element => element.id != action.payload.id)
            };
        default:
            return state;
    };
});

export default cartReducer;