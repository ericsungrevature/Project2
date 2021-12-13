import Actions, {ActionTypes, RecipeState} from "../actions";

const initialState: RecipeState = {
    id: 0,
    price: 0,
    img: "",
    name: "",
    description: "",
    ingredients: [],
    directions: [],
    tags: []
};

const recipeReducer = (state: RecipeState = initialState, action: Actions): RecipeState => {
    switch(action.type){
        case ActionTypes.ADDRECIPE:
            console.log("recipe added");
            return action.payload;
        default:
                return state;
    }    
    
};

export default recipeReducer;