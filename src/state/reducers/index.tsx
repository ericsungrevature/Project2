import { combineReducers } from "redux";
import userReducer from "./userReducer";
import recipeReducer from './recpieReducer';

const reducers = combineReducers({
    user: userReducer,
    newRecipe: recipeReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;