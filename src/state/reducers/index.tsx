import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;