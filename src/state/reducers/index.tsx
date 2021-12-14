import { combineReducers } from "redux";
import userReducer from "./userReducer";
import recipeReducer from './recipeReducer';

const reducers = combineReducers({
    user: userReducer,
    newRecipe: recipeReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;